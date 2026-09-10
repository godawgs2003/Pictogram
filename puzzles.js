// puzzles.js - Starter Library Batch (15x15)

export const rawNonogramLibrary = [
    {
        id: "smile-01",
        name: "Smile Emoji",
        difficulty: "Easy",
        compressedGrid: "4e7f4e,2e2f7e2f2e,1e1f11e1f,1e1f11e1f,1f2e2f5e2f2e1f,1f2e2f5e2f2e1f,1f13e1f,1f13e1f,1f2e1f7e1f2e1f,1f2e1f7e1f2e1f,1e1f3e5f3e1f,1e1f11e1f,2e2f7e2f2e,4e7f4e,15e"
    },
    {
        id: "heart-02",
        name: "Heart",
        difficulty: "Easy",
        compressedGrid: "15e,15e,2e4f3e4f2e,1e6f1e6f1e,1e13f1e,1e13f1e,1e13f1e,2e11f2e,3e9f3e,4e7f4e,5e5f5e,6e3f6e,7e1f7e,15e,15e"
    },
    {
        id: "sword-03",
        name: "Broadsword",
        difficulty: "Normal",
        compressedGrid: "7e1f7e,6e3f6e,6e3f6e,6e3f6e,6e3f6e,6e3f6e,6e3f6e,6e3f6e,4e7f4e,2e11f2e,5e5f5e,6e3f6e,6e3f6e,5e5f5e,7e1f7e"
    },
    {
        id: "key-04",
        name: "Skeleton Key",
        difficulty: "Normal",
        compressedGrid: "5e5f5e,4e2f1e2f4e,3e2f3e2f3e,3e2f3e2f3e,4e2f1e2f4e,5e5f5e,6e3f6e,6e3f6e,6e5f4e,6e3f6e,6e5f4e,6e3f6e,6e5f4e,6e3f6e,6e3f6e"
    },
    {
        id: "house-05",
        name: "Little House",
        difficulty: "Normal",
        compressedGrid: "7e1f7e,6e3f6e,5e5f5e,4e7f4e,3e9f3e,2e11f2e,1e13f1e,2e11f2e,2e3f2e1f2e3f2e,2e3f2e1f2e3f2e,2e3f2e3f2e2f2e,2e3f2e3f2e2f2e,2e3f2e3f2e2f2e,2e11f2e,15e"
    },
    {
        id: "cup-06",
        name: "Coffee Mug",
        difficulty: "Easy",
        compressedGrid: "15e,2e9f4e,2e9f1e2f1e,2e1f7e1f1e1f1e,2e1f7e1f1e1f1e,2e1f7e1f1e1f1e,2e1f7e1f2e2f,2e9f4e,2e1f7e1f5e,2e1f7e1f5e,3e7f5e,4e5f6e,15e,15e,15e"
    },
    {
        id: "anchor-07",
        name: "Anchor",
        difficulty: "Hard",
        compressedGrid: "6e3f6e,5e2f1e2f5e,5e2f1e2f5e,6e3f6e,7e1f7e,7e1f7e,4e7f4e,7e1f7e,7e1f7e,1f6e1f6e1f,1f6e1f6e1f,2e1f4e1f4e1f2e,3e9f3e,5e5f5e,7e1f7e"
    },
    {
        id: "mushroom-08",
        name: "Super Mushroom",
        difficulty: "Normal",
        compressedGrid: "5e5f5e,3e9f3e,2e11f2e,1e4f1e3f1e4f1e,1e3f3e3f3e3f1e,1e3f3e3f3e3f1e,1e4f1e3f1e4f1e,1e13f1e,2e4f3e4f2e,3e3f3e3f3e,3e3f3e3f3e,3e3f3e3f3e,3e9f3e,4e7f4e,15e"
    },
    {
        id: "apple-09",
        name: "Apple",
        difficulty: "Easy",
        compressedGrid: "7e2f6e,6e2f7e,6e2f7e,3e4f1e4f1e,1e13f1e,1e13f1e,1e13f1e,1e13f1e,1e13f1e,2e11f2e,2e11f2e,3e9f3e,4e3f1e3f4e,15e,15e"
    },
    {
        id: "ghost-10",
        name: "Arcade Ghost",
        difficulty: "Easy",
        compressedGrid: "5e5f5e,3e9f3e,2e11f2e,1e13f1e,1e2f2e3f2e2f1e,1e2f2e3f2e2f1e,1e13f1e,1e13f1e,1e13f1e,1e13f1e,1e13f1e,1e13f1e,1f1e3f1e3f1e3f1e,1f3e1f3e1f3e1f,15e"
    },
    {
        id: "tree-11",
        name: "Pine Tree",
        difficulty: "Easy",
        compressedGrid: "7e1f7e,6e3f6e,5e5f5e,6e3f6e,4e7f4e,3e9f3e,5e5f5e,3e9f3e,2e11f2e,1e13f1e,6e3f6e,6e3f6e,6e3f6e,5e5f5e,15e"
    },
    {
        id: "arrow-12",
        name: "Cursor Arrow",
        difficulty: "Easy",
        compressedGrid: "2e2f11e,2e3f10e,2e4f9e,2e5f8e,2e6f7e,2e7f6e,2e8f5e,2e9f4e,2e10f3e,2e6f7e,2e2f2e2f7e,3e1f2e2f7e,4e3f8e,4e2f9e,15e"
    },
    {
        id: "hourglass-13",
        name: "Hourglass",
        difficulty: "Normal",
        compressedGrid: "2e11f2e,2e11f2e,3e1f7e1f3e,3e1f1e3f1e1f3e,4e1f1e1f1e1f4e,5e1f3e1f5e,6e3f6e,6e3f6e,5e1f3e1f5e,4e1f5e1f4e,3e1f7e1f3e,3e1f7e1f3e,2e11f2e,2e11f2e,15e"
    },
    {
        id: "diamond-14",
        name: "Diamond",
        difficulty: "Easy",
        compressedGrid: "7e1f7e,6e3f6e,5e5f5e,4e7f4e,3e9f3e,2e11f2e,1e13f1e,2e11f2e,3e9f3e,4e7f4e,5e5f5e,6e3f6e,7e1f7e,15e,15e"
    },
    {
        id: "sailboat-15",
        name: "Sailboat",
        difficulty: "Normal",
        compressedGrid: "7e1f7e,7e2f6e,7e3f5e,7e4f4e,7e5f3e,7e6f2e,7e7f1e,7e1f7e,7e1f7e,1e13f1e,1e13f1e,2e11f2e,3e9f3e,4e7f4e,15e"
    }
];

export function decompressPuzzle(rleString) {
    const rows = rleString.split(',');
    return rows.map(rowStr => {
        const row = [];
        const matches = rowStr.match(/(\d+[ef])/g) || [];
        matches.forEach(token => {
            const length = parseInt(token.slice(0, -1));
            const type = token.slice(-1) === 'f' ? 1 : 0;
            for (let i = 0; i < length; i++) {
                row.push(type);
            }
        });
        return row;
    });
}