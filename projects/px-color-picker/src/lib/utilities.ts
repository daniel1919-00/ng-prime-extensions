import {PxColor, PxColorFormat, PxColorFormatHSL, PxColorFormatRGBA} from "./px-color-picker";

export function convertColor<T = PxColor>(color: PxColor, destFormat: PxColorFormat): T {
    let srcFormat: PxColorFormat;
    if (typeof color === 'string') {
        srcFormat = 'hex';
    } else if ((color as any)['r'] !== undefined) {
        srcFormat = 'rgba';
    } else {
        srcFormat = 'hsl';
    }

    if (srcFormat === destFormat) {
        return color as T;
    }

    let rgba: PxColorFormatRGBA = {r: 0, g: 0, b: 0, a: 1};
    switch (srcFormat) {
        case 'rgba':
            rgba = color as PxColorFormatRGBA;
            break;

        case 'hex':
            const hex = (color as string).replace('#', '');
            rgba = {
                r: parseInt(hex.substring(0, 2), 16),
                g: parseInt(hex.substring(2, 4), 16),
                b: parseInt(hex.substring(4, 6), 16),
                a: 1
            };
            break

        case "hsl":
            const {h, s, l} = color as PxColorFormatHSL;

            if (s !== 0) {
                const hueToRgb = (p: number, q: number, t: number) => {
                    t = (t + 1) % 1;
                    if (t < 1 / 6) return p + (q - p) * 6 * t;
                    if (t < 1 / 2) return q;
                    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                    return p;
                };

                const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                const p = 2 * l - q;
                rgba.r = hueToRgb(p, q, h + 1 / 3);
                rgba.g = hueToRgb(p, q, h);
                rgba.b = hueToRgb(p, q, h - 1 / 3);
            } else {
                rgba.r = rgba.g = rgba.b = l; // achromatic
            }
            break;
    }

    switch (destFormat) {
        case 'rgba':
            return rgba as T;
        case 'hex':
            return `#${rgba.r.toString(16).padStart(2, '0')}${rgba.g.toString(16).padStart(2, '0')}${rgba.b.toString(16).padStart(2, '0')}` as T;
        case 'hsl':
            const r = rgba.r / 255;
            const g = rgba.g / 255;
            const b = rgba.b / 255;

            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            let h, s, l;
            h = s = l = (max + min) / 2;

            if (max === min) {
                h = s = 0;
            } else {
                const d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);
                        break;
                    case g:
                        h = (b - r) / d + 2;
                        break;
                    case b:
                        h = (r - g) / d + 4;
                        break;
                }
                h /= 6;
            }

            return {h: h * 360, s: s * 100, l: l * 100} as T;
    }
}

export function calculateHue(color: PxColorFormatRGBA): number {
    const { r, g, b } = color;

    // Normalize RGB values to be in the range [0, 1]
    const normalizedR = r / 255;
    const normalizedG = g / 255;
    const normalizedB = b / 255;

    const max = Math.max(normalizedR, normalizedG, normalizedB);
    const min = Math.min(normalizedR, normalizedG, normalizedB);

    let hue;
    if (max === min) {
        hue = 0;
    } else if (max === normalizedR) {
        hue = ((normalizedG - normalizedB) / (max - min)) % 6;
    } else if (max === normalizedG) {
        hue = (normalizedB - normalizedR) / (max - min) + 2;
    } else {
        hue = (normalizedR - normalizedG) / (max - min) + 4;
    }
    hue *= 60;

    // Clamp hue [0, 360)
    return hue < 0 ? hue + 360 : hue;
}

export function calculateSaturation(color: PxColorFormatRGBA): number {
    const { r, g, b } = color;

    // Normalize RGB values to be in the range [0, 1]
    const normalizedR = r / 255;
    const normalizedG = g / 255;
    const normalizedB = b / 255;

    // Find maximum and minimum values of RGB
    const max = Math.max(normalizedR, normalizedG, normalizedB);
    const min = Math.min(normalizedR, normalizedG, normalizedB);

    // Calculate saturation
    let saturation;
    if (max === 0) {
        saturation = 0;
    } else {
        saturation = (max - min) / max;
    }

    return saturation;
}
