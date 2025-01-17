"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import "jest";
const globals_1 = require("@jest/globals");
const map_1 = require("./map");
(0, globals_1.describe)("mapMe", () => {
    (0, globals_1.it)("should not mutate the original object", () => {
        const list = [
            "pizza",
            undefined,
            NaN,
            false,
            "PDQ",
            42,
            "JavaScript",
            2 % 1,
        ];
        const originalList = [...list];
        const mapMeArr = (0, map_1.mapMe)((el) => el, list);
        (0, globals_1.expect)(list).toEqual(originalList);
    });
    (0, globals_1.it)("should match return values from a mapped array", () => {
        const list = [
            "pizza",
            undefined,
            NaN,
            false,
            "PDQ",
            42,
            "JavaScript",
            2 % 1,
        ];
        const mapper = (el, i, arr) => `${el}${arr[arr.length - i]}?!`;
        const mapMeArr = (0, map_1.mapMe)(mapper, list);
        const mapArr = list.map(mapper);
        (0, globals_1.expect)(mapMeArr).toEqual(mapArr);
    });
    (0, globals_1.it)("attampt mapping empty array", () => {
        const list = [];
        const mapMeArr = (0, map_1.mapMe)((num) => num * 2, list);
        (0, globals_1.expect)(mapMeArr).toEqual([]);
    });
    (0, globals_1.it)("should map properties of objects in the array", () => {
        const persons = [
            { name: "Paul Atreides", age: 30 },
            { name: "Duncan Idaho", age: 40 },
        ];
        const mapMeArr = (0, map_1.mapMe)((person) => person.name, persons);
        (0, globals_1.expect)(mapMeArr).toEqual(["Paul Atreides", "Duncan Idaho"]);
    });
});
//# sourceMappingURL=map.test.js.map