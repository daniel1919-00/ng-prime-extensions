export interface PxSearchableAccordionEntry
{
    header: string;
    description: string;
    expanded?: boolean;
    /**
     * Optional data that can be used by the developer, usually when dealing with custom header/content templates.
     */
    data?: any;
}
