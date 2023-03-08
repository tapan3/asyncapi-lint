"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldLength = void 0;
function fieldLength(input, options) {
    try {
        if (input.length < options.min) {
            return [
                {
                    message: `Write a well formatted brief description of your API with atleast 30 char long`,
                },
            ];
        }
        return [];
    }
    catch (ex) {
        return [
            {
                message: ex instanceof Error ? ex.message : String(ex),
            },
        ];
    }
}
exports.fieldLength = fieldLength;
