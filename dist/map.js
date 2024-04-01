"use strict";
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapMe = void 0;
/**
 * The map() method creates a new array
 * populated with the results
 * of calling a provided function on every element in the calling array.
 */
// export const mapMe = () => {};
function mapMe(callback, arr) {
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(callback(arr[i], i, arr));
    }
    return mappedArray;
}
exports.mapMe = mapMe;
//# sourceMappingURL=map.js.map