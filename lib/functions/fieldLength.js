"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spectral_core_1 = require("@stoplight/spectral-core");
exports.default = (0, spectral_core_1.createRulesetFunction)({
    input: {
        type: 'string',
    },
    options: {
        type: 'object',
        additionalProperties: false,
        properties: {
            min: {
                type: 'number',
            },
        },
        required: ['min'],
    },
}, function fieldLength(input, options) {
    try {
        // console.log('input value is', input.length);
        // console.log('options value is', options);
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
});
