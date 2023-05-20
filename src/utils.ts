interface Item {
    id: number;
    isBomb: boolean;
    marked: boolean;
}

export function createRandomArray(): Item[] {
    const array: Item[] = [];

    const bombIndices: number[] = [];
    while (bombIndices.length < 3) {
        const index = Math.floor(Math.random() * 9);
        if (!bombIndices.includes(index)) {
            bombIndices.push(index);
        }
    }
    for (let i = 0; i < 9; i++) {
        const item: Item = {
            id: i,
            isBomb: bombIndices.includes(i),
            marked: false,
        };
        array.push(item);
    }

    return array;
}
