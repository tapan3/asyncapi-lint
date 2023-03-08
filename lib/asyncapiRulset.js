"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const spectral_formats_1 = require("@stoplight/spectral-formats");
const spectral_functions_1 = require("@stoplight/spectral-functions");
const spectral_rulesets_1 = require("@stoplight/spectral-rulesets");
const fieldLength_1 = __importDefault(require("./functions/fieldLength"));
exports.default = {
    formats: [spectral_formats_1.aas2],
    extends: spectral_rulesets_1.asyncapi,
    rules: {
        'valid-document-version': {
            message: 'Version should match 1.x.x',
            severity: 'warn',
            given: '$.info',
            then: [
                {
                    field: 'version',
                    function: spectral_functions_1.defined,
                },
                {
                    field: 'version',
                    function: spectral_functions_1.pattern,
                    functionOptions: {
                        match: '^1(\\.[0-9]+){2}$',
                    },
                },
            ],
        },
        'valid-field-length': {
            message: '{{error}}',
            severity: 'warn',
            given: '$.info',
            then: {
                field: 'description',
                function: fieldLength_1.default,
                functionOptions: {
                    min: 30,
                },
            },
        },
    },
};
