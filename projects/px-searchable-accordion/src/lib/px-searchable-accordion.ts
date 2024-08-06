export interface PxSearchableAccordionEntry
{
    /**
     * If set, it will be used to create url fragments
     */
    id?: string;
    header: string;
    content: string;
    expanded?: boolean;
    /**
     * Optional data that can be used by the developer, usually when dealing with custom header/content templates.
     */
    data?: any;
}
