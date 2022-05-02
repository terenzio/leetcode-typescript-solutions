declare const range: (start: number, end: number, step?: number) => number[];
declare const sum: (nums: number[]) => number;
interface IAList {
    value: number;
    rest: IAList | null;
}
declare const exampleList: IAList;
declare const listToArray: (list: IAList | null) => number[];
declare const arrayToList: (array: number[]) => IAList | null;
declare const prepend: (num: number, list: IAList | null) => IAList;
declare const nth: (position: number, list: IAList | null) => number | undefined;
declare const isObject: (object: any) => boolean;
declare const deepComparison: (v1: any, v2: any) => boolean;
declare const hero1: {
    name: string;
    address: {
        city: string;
    };
};
declare const hero2: {
    name: string;
    address: {
        city: string;
    };
};
//# sourceMappingURL=3.d.ts.map