import {Component, Input, OnChanges, OnDestroy, SimpleChanges, TemplateRef, ViewEncapsulation} from '@angular/core';
import {AccordionModule} from "primeng/accordion";
import {PxSearchableAccordionEntry} from "./px-searchable-accordion";
import {AsyncPipe, NgForOf, NgTemplateOutlet} from "@angular/common";
import {BehaviorSubject, debounceTime, Observable, Subject, Subscription} from "rxjs";

@Component({
    selector: 'px-searchable-accordion',
    standalone: true,
    imports: [
        AccordionModule,
        NgForOf,
        NgTemplateOutlet,
        AsyncPipe
    ],
    templateUrl: './px-searchable-accordion.component.html',
    styleUrl: './px-searchable-accordion.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class PxSearchableAccordionComponent implements OnChanges, OnDestroy {
    /**
     * Accordion entries to be rendered
     */
    @Input({required: true}) entries!: PxSearchableAccordionEntry[];
    /**
     * An observable that emits the searched string
     */
    @Input({required: true}) searchString!: string | Observable<string> | Subject<string> | BehaviorSubject<string>;
    @Input() headerTemplate?: TemplateRef<any>;
    @Input() contentTemplate?: TemplateRef<any>;
    /**
     * Search delay time in milliseconds
     */
    @Input() searchDebounceTime = 250;
    @Input() highlightWords: boolean = true;

    protected filteredEntries = new BehaviorSubject<PxSearchableAccordionEntry[]>([]);
    protected searchSub?: Subscription;

    private lastSearchString = '';

    ngOnChanges(changes: SimpleChanges) {
        if (changes['searchString']) {
            this.lastSearchString = '';
            this.searchSub?.unsubscribe();
            delete this.searchSub;

            if (typeof this.searchString === "string") {
                this.search(this.searchString).then();
            } else {
                this.search(this.lastSearchString).then();
                this.searchSub = this.searchString
                    .pipe(debounceTime(this.searchDebounceTime))
                    .subscribe(searchStr => this.search(searchStr).then());
            }
        } else if (changes['entries']) {
            if (typeof this.searchString === "string") {
                this.search(this.searchString).then();
            } else {
                this.search(this.lastSearchString).then();
            }
        }
    }

    async search(searchStr: string) {
        if (searchStr === '') {
            this.filteredEntries.next(this.entries);
            return;
        }

        this.lastSearchString = searchStr;

        searchStr = searchStr.toLowerCase();
        const entries = this.entries;
        const filteredEntries: PxSearchableAccordionEntry[] = [];

        for (let entryIndex = 0, size = entries.length; entryIndex < size; ++entryIndex) {
            const entry = entries[entryIndex];
            const headerIncludesStr = entry.header.toLowerCase().indexOf(searchStr) !== -1;
            const contentIncludesStr = entry.description.toLowerCase().indexOf(searchStr) !== -1;

            if (!(headerIncludesStr || contentIncludesStr)) {
                continue;
            }

            filteredEntries.push(this.highlightWords ? {
                header: headerIncludesStr ? this.highlightString(searchStr, entry.header) : entry.header,
                description: contentIncludesStr ? this.highlightString(searchStr, entry.description) : entry.description,
                expanded: entry.expanded,
                data: entry.data,
            } : entry);
        }

        this.filteredEntries.next(filteredEntries);
    }

    private highlightString(searchStr: string, sourceString: string, highlightClass: string = 'px-searchable-accordion-highlight') {
        let destString = [];
        let highlightedChars = [];
        const sourceStringLower = sourceString.toLowerCase();
        const sourceStringLen = sourceString.length;

        for (let i = 0; i < sourceStringLen; ++i) {
            let char = sourceString[i];

            if (searchStr.indexOf(sourceStringLower[i]) !== -1) {
                highlightedChars.push(char);
                continue;
            }

            if (highlightedChars.length) {
                char = `<span class="${highlightClass}">${highlightedChars.join('')}</span>${char}`;
                highlightedChars = [];
            }

            destString.push(char);
        }

        if (highlightedChars.length) {
            destString.push(`<span class="${highlightClass}">${highlightedChars.join('')}</span>`);
        }

        return destString.join('');
    }

    ngOnDestroy() {
        this.searchSub?.unsubscribe();
    }
}
