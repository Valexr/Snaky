import type { StorxyStore } from "storxy"

export interface Speed extends StorxyStore<number> {
    set: (size: number) => void
}

export type Size = {
    width: number,
    height: number,
}
export interface FieldSize extends StorxyStore<Size> {
    set: (size: Size) => void
}

export type Coords = {
    x: number,
    y: number,
}
export interface Apple extends StorxyStore<Coords> {
    generate: () => void
    isPixelAnApple: (x: number, y: number) => boolean
}

export interface Snake extends StorxyStore<Coords[]> {
    direction: StorxyStore<Coords> & {
        set: (dir: string) => void
    }
    head: StorxyStore<Coords> & {
        move: () => void
    }
    init: () => void
    makeLonger: StorxyStore<boolean>
    moveBody: () => void
    isPixelInBody: (x: number, y: number) => boolean
}