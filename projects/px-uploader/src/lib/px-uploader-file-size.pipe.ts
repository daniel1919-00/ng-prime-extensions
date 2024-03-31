import {inject, Pipe, PipeTransform} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";

@Pipe({
    standalone: true,
    name: 'pxFileSize'
})
export class PxFileSizePipe implements PipeTransform {
    private readonly units: string[];
    constructor() {
        this.units = inject(PrimeNGConfig).translation.fileSizeTypes || ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    }

    /**
     * Converts bytes to a human-readable string
     * @param bytes
     * @param threshold Threshold after which the unit is increased. e.g. 1024B -> 1KB
     * @param digits The number of fraction digits shown. E.g. 2.25MB
     */
    transform(bytes: number, threshold = 1024, digits = 2): string {
        const units = this.units;
        if (Math.abs(bytes) < threshold) {
            return bytes + '' + units[0];
        }

        const maxUnits = units.length - 1;
        let unit = 0;
        const ra = 10 ** 1;

        do {
            bytes /= threshold;
            ++unit;
        } while (Math.round(Math.abs(bytes) * ra) / ra >= threshold && unit < maxUnits);

        return bytes.toFixed(digits) + ' ' + units[unit];
    }
}
