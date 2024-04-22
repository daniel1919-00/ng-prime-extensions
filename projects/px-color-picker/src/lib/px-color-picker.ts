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

export type PxColorFormatHEX = string;
export type PxColorFormat = 'hex' | 'rgba' | 'hsl';
export type PxColor = PxColorFormatHEX | PxColorFormatRGBA | PxColorFormatHSL;
export interface PxCanvasSize {
    width: number;
    height: number;
}
