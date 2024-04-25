export interface PxColorFormatRGBA {
    r: number;
    g: number;
    b: number;
    a: number;
}

export interface PxColorFormatHSL {
    h: number;
    s: number;
    l: number;
}

export interface PxColorFormatHSV {
    h: number;
    s: number;
    v: number;
}

export type PxColorFormatHEX = string;
export type PxColorFormat = 'hex' | 'rgba' | 'hsl' | 'hsv';
export type PxColor = PxColorFormatHEX | PxColorFormatRGBA | PxColorFormatHSL | PxColorFormatHSV;
export interface PxCanvasSize {
    width: number;
    height: number;
}
