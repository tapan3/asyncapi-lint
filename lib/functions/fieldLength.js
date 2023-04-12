"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldLength = void 0;
function fieldLength(input, options) {
    if (!input) {
        return [];
    }
    if (input.length < options.min) {
        return [
            {
                message: `Write a well formatted brief description of your API with at least 30 char long.`,
            },
        ];
    }
    return [];
}
exports.fieldLength = fieldLength;
