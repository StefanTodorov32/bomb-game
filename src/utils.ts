import {IBombBox} from "./types";

export function createRandomArray(bombs: number): IBombBox[] {
    const array: IBombBox[] = [];

    const bombIndices: number[] = [];
    while (bombIndices.length < bombs) {
        const index = Math.floor(Math.random() * 18);
        if (!bombIndices.includes(index)) {
            bombIndices.push(index);
        }
    }

    for (let i = 0; i < 18; i++) {
        const item: IBombBox = {
            id: i,
            isBomb: bombIndices.includes(i),
            marked: false,
        };
        array.push(item);
    }

    return array;
}