import {
    AfterViewInit, ChangeDetectorRef,
    Component, Inject,
    Input,
    OnChanges,
    OnDestroy,
    SimpleChanges,
    TemplateRef,
    ViewEncapsulation
} from '@angular/core';
import {AccordionModule} from "primeng/accordion";
import {PxSearchableAccordionEntry} from "./px-searchable-accordion";
import {AsyncPipe, DOCUMENT, NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {BehaviorSubject, debounceTime, Observable, Subject, Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'px-searchable-accordion',
    standalone: true,
    imports: [
        AccordionModule,
        NgForOf,
        NgTemplateOutlet,
        AsyncPipe,
        NgIf
    ],
    templateUrl: './px-searchable-accordion.component.html',
    styleUrl: './px-searchable-accordion.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class PxSearchableAccordionComponent implements OnChanges, AfterViewInit, OnDestroy {
    /**
     * Accordion entries to be rendered.
     */
    @Input({required: true}) entries!: PxSearchableAccordionEntry[];
    /**
     * A search string or an observable that emits the search string.
     */
    @Input({required: true}) searchString!: string | Observable<string> | Subject<string> | BehaviorSubject<string>;
    /**
     * Template to render the header with.
     */
    @Input() headerTemplate?: TemplateRef<any>;
    /**
     * Template to render the content with.
     */
    @Input() contentTemplate?: TemplateRef<any>;
    /**
     * Template to render the no results message.
     */
    @Input() noResultsTemplate?: TemplateRef<any>;
    /**
     * Search delay time in milliseconds.
     */
    @Input() searchDebounceTime = 250;
    /**
     * Weather searched words will be highlighted.
     */
    @Input() highlightWords: boolean = true;
    /**
     * The css class applied to the highlighted words.
     */
    @Input() highlightClass: string = 'px-searchable-accordion-highlight';
    /**
     * If true, url fragments will be generated based on the set entry id.
     */
    @Input() allowUrlFragments: boolean = true;

    protected filteredEntries = new BehaviorSubject<PxSearchableAccordionEntry[]>([]);
    protected activeEntryIndex: number | null = null;

    private searchSub?: Subscription;
    private routeFragmentsSub?: Subscription;
    private lastSearchString = '';
    private searchQueryRegex = /[^a-zA-Z0-9\s]/g;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private changeDetector: ChangeDetectorRef,
        @Inject(DOCUMENT) private document: Document
    ) {}

    ngOnChanges(changes: SimpleChanges) {
        if (changes['searchString']) {
            this.lastSearchString = '';
            this.searchSub?.unsubscribe();
            delete this.searchSub;

            if (typeof this.searchString === "string") {
                this.search(this.searchString).then();
            }
            else {
                this.search(this.lastSearchString).then();
                this.searchSub = this.searchString
                    .pipe(
                        debounceTime(this.searchDebounceTime)
                    )
                    .subscribe(searchStr => this.search(searchStr).then());
            }
        }
        else if (changes['entries']) {
            if (typeof this.searchString === "string") {
                this.search(this.searchString).then();
            }
            else {
                this.search(this.lastSearchString).then();
            }
        }
    }

    ngAfterViewInit() {
        if(this.allowUrlFragments)
        {
            this.routeFragmentsSub = this.activatedRoute.fragment
                .subscribe((fragment: string | null) => {
                    if(fragment) {
                        const activeEntries = this.filteredEntries.getValue();
                        const activeEntriesLen = activeEntries.length;

                        for (let i = 0; i < activeEntriesLen; i++) {
                            const entry = activeEntries[i];

                            if(entry.id === fragment && this.activeEntryIndex !== i) {
                                this.activeEntryIndex = i;
                                this.changeDetector.detectChanges();
                                this.document.getElementById(entry.id)?.scrollIntoView({behavior: 'auto', block: 'center', inline: 'center'});
                                break;
                            }
                        }
                    }
                });
        }
    }

    /**
     * Searches the available entries for the given search string
     * @param searchStr
     */
    async search(searchStr: string) {
        searchStr = searchStr.replace(this.searchQueryRegex, '').trim().toLowerCase();

        if (searchStr === '') {
            this.filteredEntries.next(this.entries);
            return;
        }
        else if (searchStr === this.lastSearchString) {
            return;
        }

        this.lastSearchString = searchStr;

        const entries = this.entries;
        const entriesLen = entries.length;
        const filteredEntries: PxSearchableAccordionEntry[] = [];

        for (let entryIndex = 0; entryIndex < entriesLen; ++entryIndex) {
            const entry = entries[entryIndex];
            const lowerCaseHeader = entry.header.toLowerCase();
            const lowerCaseContent = entry.content.toLowerCase();
            const headerIncludesStr = lowerCaseHeader.indexOf(searchStr) !== -1;
            const contentIncludesStr = lowerCaseContent.indexOf(searchStr) !== -1;

            if (!(headerIncludesStr || contentIncludesStr)) {
                continue;
            }

            filteredEntries.push(this.highlightWords ? {
                header: headerIncludesStr ? this.highlightString(entry.header, lowerCaseHeader, searchStr) : entry.header,
                content: contentIncludesStr ? this.highlightString(entry.content, lowerCaseContent, searchStr) : entry.content,
                expanded: entry.expanded,
                data: entry.data,
            } : entry);
        }

        this.filteredEntries.next(filteredEntries);
    }

    protected activeIndexChanged(index: number | number[]) {
        if(Array.isArray(index)) {
            index = index[0];
        }

        this.activeEntryIndex = index;

        if(!(index && this.allowUrlFragments)) {
            return;
        }

        const entries = this.filteredEntries.getValue();
        if(!entries.length) {
            return;
        }

        const activeEntry = entries[index];
        if(!activeEntry.id) {
            return;
        }

        this.router.navigate([], {
            fragment: activeEntry.id,
        }).then();
    }

    private highlightString(sourceString: string, sourceStringLower: string, searchStr: string) {
        const destString = [];
        const sourceStringLen = sourceString.length;
        const highlightClass = this.highlightClass;
        let highlightedChars = [];
        let inHtmlTag = false;

        for (let i = 0; i < sourceStringLen; ++i) {
            let char = sourceString[i];

            if(inHtmlTag) {
                if(char === '>') {
                    inHtmlTag = false;
                }
            }
            else if(char === '<') {
                inHtmlTag = true;
            }
            else if (searchStr.indexOf(sourceStringLower[i]) !== -1) {
                highlightedChars.push(char);
                continue;
            }
            else if (highlightedChars.length) {
                if(highlightedChars.length === searchStr.length) {
                    char = '<span class="' + highlightClass + '">' + highlightedChars.join('') + '</span>' + char;
                }
                else {
                    char = highlightedChars.join('') + char;
                }

                highlightedChars = [];
            }

            destString.push(char);
        }

        if (highlightedChars.length) {
            if(highlightedChars.length === searchStr.length) {
                destString.push('<span class="' + highlightClass + '">' + highlightedChars.join('') + '</span>');
            }
            else {
                destString.push(highlightedChars.join(''));
            }
        }

        return destString.join('');
    }

    ngOnDestroy() {
        this.searchSub?.unsubscribe();
        this.filteredEntries.complete();
        this.routeFragmentsSub?.unsubscribe();
    }
}
