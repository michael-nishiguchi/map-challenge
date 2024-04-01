// import "jest";
import { describe, expect, it } from "@jest/globals";

import { mapMe } from "./map";

describe("mapMe", () => {
  it("should not mutate the original object", () => {
    const list: (number | undefined | boolean | string)[] = [
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
    const mapMeArr = mapMe((el) => el, list);
    expect(list).toEqual(originalList); //runs list through mapMe() and checks if original array is unchnaged
  });
  it("should match return values from a mapped array", () => {
    const list: (number | undefined | boolean | string)[] = [
      "pizza",
      undefined,
      NaN,
      false,
      "PDQ",
      42,
      "JavaScript",
      2 % 1,
    ];
    const mapper = (
      el: string | number | boolean | undefined,
      i: number,
      arr: (string | number | boolean | undefined)[]
    ) => `${el}${arr[arr.length - i]}?!`; //transforms element to string
    const mapMeArr = mapMe(mapper, list);
    const mapArr = list.map(mapper);
    expect(mapMeArr).toEqual(mapArr);
  });
  it("attampt mapping empty array", () => {
    const list: number[] = [];
    const mapMeArr = mapMe((num) => num * 2, list);
    expect(mapMeArr).toEqual([]);
  });
  it("should map properties of objects in the array", () => {
    interface Person {
      name: string;
      age: number;
    }
    const persons: Person[] = [
      { name: "Paul Atreides", age: 30 },
      { name: "Duncan Idaho", age: 40 },
    ];
    const mapMeArr = mapMe((person) => person.name, persons);
    expect(mapMeArr).toEqual(["Paul Atreides", "Duncan Idaho"]);
  });
});
