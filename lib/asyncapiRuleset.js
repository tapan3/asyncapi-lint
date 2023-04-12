"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spectral_formats_1 = require("@stoplight/spectral-formats");
const spectral_functions_1 = require("@stoplight/spectral-functions");
const spectral_rulesets_1 = require("@stoplight/spectral-rulesets");
const fieldLength_1 = require("./functions/fieldLength");
exports.default = {
    formats: [spectral_formats_1.aas2],
    extends: spectral_rulesets_1.asyncapi,
    rules: {
        'asyncapi-info-description': 'error',
        'asyncapi-info-contact': 'error',
        'custom-info-version': {
            message: 'Version must be present and follow semantic versioning.',
            severity: 'error',
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
        'custom-info-description': {
            message: '{{error}}',
            severity: 'error',
            given: '$.info',
            then: {
                field: 'description',
                function: fieldLength_1.fieldLength,
                functionOptions: {
                    min: 30,
                },
            },
        },
    },
};
