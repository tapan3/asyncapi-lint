import { fieldLength } from './functions/fieldLength';
declare const _default: {
    formats: import("@stoplight/spectral-core").Format<void>[];
    extends: {
        documentationUrl: string;
        formats: import("@stoplight/spectral-core").Format<void>[];
        rules: {
            'asyncapi-channel-no-empty-parameter': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        notMatch: string;
                    };
                };
            };
            'asyncapi-channel-no-query-nor-fragment': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        notMatch: string;
                    };
                };
            };
            'asyncapi-channel-no-trailing-slash': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        notMatch: string;
                    };
                };
            };
            'asyncapi-channel-parameters': {
                description: string;
                message: string;
                severity: string;
                recommended: boolean;
                given: string[];
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<{
                        parameters: Record<string, unknown>;
                    }, null>;
                };
            };
            'asyncapi-channel-servers': {
                description: string;
                message: string;
                severity: string;
                recommended: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<{
                        servers?: Record<string, unknown> | undefined;
                        channels?: Record<string, {
                            servers?: string[] | undefined;
                        }> | undefined;
                    }, null>;
                };
            };
            'asyncapi-headers-schema-type-object': {
                description: string;
                message: string;
                severity: string;
                recommended: boolean;
                given: string[];
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, import("@stoplight/spectral-functions").SchemaOptions>;
                    functionOptions: {
                        allErrors: boolean;
                        schema: {
                            type: string;
                            properties: {
                                type: {
                                    enum: string[];
                                };
                            };
                            required: string[];
                        };
                    };
                };
            };
            'asyncapi-info-contact-properties': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                }[];
            };
            'asyncapi-info-contact': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'asyncapi-info-description': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'asyncapi-info-license-url': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'asyncapi-info-license': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'asyncapi-latest-version': {
                description: string;
                message: string;
                recommended: boolean;
                severity: string;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, import("@stoplight/spectral-functions").SchemaOptions>;
                    functionOptions: {
                        schema: {
                            const: string;
                        };
                    };
                };
            };
            'asyncapi-message-examples': {
                description: string;
                message: string;
                severity: string;
                recommended: boolean;
                given: string[];
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<import("@stoplight/spectral-rulesets/dist/asyncapi/functions/asyncApi2MessageExamplesValidation").MessageFragment, null>;
                };
            };
            'asyncapi-message-messageId-uniqueness': {
                description: string;
                severity: string;
                recommended: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<{
                        channels: Record<string, {
                            subscribe: Record<string, unknown>;
                            publish: Record<string, unknown>;
                        }>;
                    }, null>;
                };
            };
            'asyncapi-operation-description': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'asyncapi-operation-operationId-uniqueness': {
                description: string;
                severity: string;
                recommended: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<{
                        channels: Record<string, {
                            subscribe: Record<string, unknown>;
                            publish: Record<string, unknown>;
                        }>;
                    }, null>;
                };
            };
            'asyncapi-operation-operationId': {
                description: string;
                severity: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'asyncapi-operation-security': {
                description: string;
                message: string;
                severity: string;
                recommended: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<Record<string, string[]>, {
                        objectType: "Server" | "Operation";
                    }>;
                    functionOptions: {
                        objectType: string;
                    };
                };
            };
            'asyncapi-parameter-description': {
                description: string;
                recommended: boolean;
                given: string[];
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'asyncapi-payload-default': {
                description: string;
                message: string;
                severity: string;
                recommended: boolean;
                given: string[];
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<{
                        default?: unknown;
                        examples?: unknown[] | undefined;
                    }, import("@stoplight/spectral-rulesets/dist/asyncapi/functions/asyncApi2SchemaValidation").Options>;
                    functionOptions: {
                        type: string;
                    };
                };
            };
            'asyncapi-payload-examples': {
                description: string;
                message: string;
                severity: string;
                recommended: boolean;
                given: string[];
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<{
                        default?: unknown;
                        examples?: unknown[] | undefined;
                    }, import("@stoplight/spectral-rulesets/dist/asyncapi/functions/asyncApi2SchemaValidation").Options>;
                    functionOptions: {
                        type: string;
                    };
                };
            };
            'asyncapi-payload-unsupported-schemaFormat': {
                description: string;
                severity: string;
                recommended: boolean;
                given: string[];
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, unknown>;
                };
            };
            'asyncapi-payload': {
                description: string;
                message: string;
                severity: string;
                recommended: boolean;
                given: string[];
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'asyncapi-schema-default': {
                description: string;
                message: string;
                severity: string;
                recommended: boolean;
                given: string[];
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<{
                        default?: unknown;
                        examples?: unknown[] | undefined;
                    }, import("@stoplight/spectral-rulesets/dist/asyncapi/functions/asyncApi2SchemaValidation").Options>;
                    functionOptions: {
                        type: string;
                    };
                };
            };
            'asyncapi-schema-examples': {
                description: string;
                message: string;
                severity: string;
                recommended: boolean;
                given: string[];
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<{
                        default?: unknown;
                        examples?: unknown[] | undefined;
                    }, import("@stoplight/spectral-rulesets/dist/asyncapi/functions/asyncApi2SchemaValidation").Options>;
                    functionOptions: {
                        type: string;
                    };
                };
            };
            'asyncapi-schema': {
                description: string;
                message: string;
                severity: string;
                recommended: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'asyncapi-server-variables': {
                description: string;
                message: string;
                severity: string;
                recommended: boolean;
                given: string[];
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<{
                        url: string;
                        variables: Record<string, unknown>;
                    }, null>;
                };
            };
            'asyncapi-server-no-empty-variable': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        notMatch: string;
                    };
                };
            };
            'asyncapi-server-no-trailing-slash': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        notMatch: string;
                    };
                };
            };
            'asyncapi-server-not-example-com': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        notMatch: string;
                    };
                };
            };
            'asyncapi-server-security': {
                description: string;
                message: string;
                severity: string;
                recommended: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<Record<string, string[]>, {
                        objectType: "Server" | "Operation";
                    }>;
                    functionOptions: {
                        objectType: string;
                    };
                };
            };
            'asyncapi-servers': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, import("@stoplight/spectral-functions").SchemaOptions>;
                    functionOptions: {
                        schema: {
                            type: string;
                            minProperties: number;
                        };
                        allErrors: boolean;
                    };
                };
            };
            'asyncapi-tag-description': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'asyncapi-tags-alphabetical': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<Record<string, unknown> | unknown[], import("@stoplight/spectral-functions").AlphabeticalOptions>;
                    functionOptions: {
                        keyedBy: string;
                    };
                };
            };
            'asyncapi-tags-uniqueness': {
                description: string;
                message: string;
                severity: string;
                recommended: boolean;
                given: string[];
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<{
                        name: string;
                    }[], null>;
                };
            };
            'asyncapi-tags': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'asyncapi-unused-components-schema': {
                description: string;
                recommended: boolean;
                resolved: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<Record<string, unknown>, import("@stoplight/spectral-functions").UnreferencedReusableObjectOptions>;
                    functionOptions: {
                        reusableObjectsLocation: string;
                    };
                };
            };
            'asyncapi-unused-components-server': {
                description: string;
                recommended: boolean;
                resolved: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<Record<string, unknown>, import("@stoplight/spectral-functions").UnreferencedReusableObjectOptions>;
                    functionOptions: {
                        reusableObjectsLocation: string;
                    };
                };
            };
        };
    };
    rules: {
        'asyncapi-info-description': string;
        'asyncapi-info-contact': string;
        'custom-info-version': {
            message: string;
            severity: string;
            given: string;
            then: ({
                field: string;
                function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                functionOptions?: undefined;
            } | {
                field: string;
                function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                functionOptions: {
                    match: string;
                };
            })[];
        };
        'custom-info-description': {
            message: string;
            severity: string;
            given: string;
            then: {
                field: string;
                function: typeof fieldLength;
                functionOptions: {
                    min: number;
                };
            };
        };
    };
};
export default _default;
