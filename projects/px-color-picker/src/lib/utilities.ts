import {
    PxCanvasSize,
    PxColor,
    PxColorFormat,
    PxColorFormatHSL,
    PxColorFormatHSV,
    PxColorFormatRGBA
} from "./px-color-picker";

/**
 *
 * @param r value in the range [0, 1].
 * @param g value in the range [0, 1].
 * @param b value in the range [0, 1].
 */
export function calculateHue(r: number, g: number, b: number): number {
    const v = Math.max(r, g, b);
    const c = v - Math.min(r, g, b);
    const h = c && ((v == r) ? (g - b) / c : ((v == g) ? 2 + (b - r) / c : 4 + (r - g) / c));

    return 60 * (h < 0 ? h + 6 : h);
}

export function convertColor<T = PxColor>(color: PxColor, destFormat: PxColorFormat): T {
    let srcFormat: PxColorFormat;
    if (typeof color === 'string') {
        srcFormat = 'hex';
    } else if ((color as any)['v'] !== undefined) {
        srcFormat = 'hsv';
    } else if ((color as any)['l'] !== undefined) {
        srcFormat = 'hsl';
    } else {
        srcFormat = 'rgba';
    }

    if (srcFormat === destFormat) {
        return color as T;
    }

    let baseRGBA: PxColorFormatRGBA = {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    };

    switch (srcFormat) {
        case 'rgba':
            baseRGBA = {
                r: (color as PxColorFormatRGBA).r || 0,
                g: (color as PxColorFormatRGBA).g || 0,
                b: (color as PxColorFormatRGBA).b || 0,
                a: (color as PxColorFormatRGBA).b || 1
            };
            break;

        case 'hex': {
            let hex = (color as string).replace('#', '');
            if (hex === '') {
                break;
            }

            if (hex.length === 3) {
                hex += hex[2].repeat(3);
            }

            baseRGBA = {
                r: parseInt(hex.substring(0, 2), 16) || 0,
                g: parseInt(hex.substring(2, 4), 16) || 0,
                b: parseInt(hex.substring(4, 6), 16) || 0,
                a: parseInt(hex.substring(6, 8), 16) || 1
            };
            break
        }

        case "hsl": {
            let {h, s, l} = color as PxColorFormatHSL;
            s /= 100;
            l /= 100;
            const a = s * Math.min(l, 1 - l);
            let extractRgbComponent = (n: number, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            baseRGBA = {
                r: Math.round(extractRgbComponent(0) * 255),
                g: Math.round(extractRgbComponent(8) * 255),
                b: Math.round(extractRgbComponent(4) * 255),
                a: 1
            };
            break;
        }

        case 'hsv': {
            let {h, s, v} = color as PxColorFormatHSV;
            s /= 100;
            v /= 100;
            const extractRgbComponent = (n: number, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
            baseRGBA = {
                r: Math.round(extractRgbComponent(5) * 255),
                g: Math.round(extractRgbComponent(3) * 255),
                b: Math.round(extractRgbComponent(1) * 255),
                a: 1
            };
            console.log(baseRGBA);
            break;
        }
    }

    switch (destFormat) {
        case 'rgba':
            return baseRGBA as T;

        case 'hex':
            return `#${baseRGBA.r.toString(16).padStart(2, '0')}${baseRGBA.g.toString(16).padStart(2, '0')}${baseRGBA.b.toString(16).padStart(2, '0')}` as T;

        case 'hsl': {
            // Thanks to https://stackoverflow.com/users/860099/kamil-kie%c5%82czewski for this code :)
            const r = baseRGBA.r / 255;
            const g = baseRGBA.g / 255;
            const b = baseRGBA.b / 255;
            const l = Math.max(r, g, b);
            const c = l - Math.min(r, g, b);
            const f = (1 - Math.abs(l + l - c - 1));

            return {
                h: calculateHue(r, g, b),
                s: (f ? c / f : 0) * 100,
                l: ((l + l - c) / 2) * 100
            } as T;
        }

        case 'hsv': {
            // Thanks to https://stackoverflow.com/users/860099/kamil-kie%c5%82czewski for this code :)
            const r = baseRGBA.r / 255;
            const g = baseRGBA.g / 255;
            const b = baseRGBA.b / 255;
            const v = Math.max(r, g, b);
            const c = v - Math.min(r, g, b);

            return {
                h: calculateHue(r, g, b),
                s: (v && c / v) * 100,
                v: v * 100
            } as T;
        }
    }
}
