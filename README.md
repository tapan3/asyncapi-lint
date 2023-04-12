<p align="center">
  <img width="25%" height="25%" src="./assets/logo.svg">
</p>

🔥 **Latest stable version**: v1.0 ([Florence](https://en.wikipedia.org/wiki/Florence) Edition)

🤔 For **questions** use [discussions page](https://github.com/ingka-group-digital/lint-asyncapi/discussions)

📃 For **new feature requests and bug reports** use [issues page](https://github.com/ingka-group-digital/lint-asyncapi/issues)

🙌 **Join our community on [#cop-api-standards](https://ingka.slack.com/archives/C0485JDACH1) channel!**

---

## How to use it?

### As a GitHub action

Add the following step to your GitHub workflow job:

> **_Recommendation:_** run it before publishing the API to Kong API Gateway

```yaml
- uses: ingka-group-digital/lint-asyncapi@v1
    with:
      files: |
        <file-1-path>
        <file-2-path>
```

### As a GitHub workflow

You can create a separate GitHub workflow to lint-asyncapi spec files:

> **_Recommendation:_** run it whenever a new change in the spec files is pushed

```yaml
name: Lint AsyncAPI files

on:
  workflow_dispatch:
  push:
    paths:
      - <spec-files-path>

jobs:
  lint-asyncapi:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Lint AsyncAPI specifications
        uses: ingka-group-digital/lint-asyncapi@v1
        with:
          files: |
            <file-1-path>
            <file-2-path>
```

## What is it?

`lint-asyncapi` is a GitHub action that helps you find problems with your AsyncAPI specification and ensure that it follows [INGKA API standards](https://github.com/ingka-group-digital/api-standards/blob/main/docs/EventAPI/README.md) maintained by API Management team.

## Why you need it?

- to make sure your AsyncAPI spec file follows [INGKA API standards](https://github.com/ingka-group-digital/api-standards/blob/main/docs/EventAPI/README.md);
- to automate AsyncAPI linting as part of your CI/CD pipeline;

## How it works?

TBD

## Which rules are used in this action?

Current set of rules contains recommended rules from the [spectral/async-api-rules](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules)package and the custom rules implemented on top of the recommended ones. Both of them together form the rules which conform [INGKA API standards](https://github.com/ingka-group-digital/api-standards/blob/main/docs/WebAPI/README.md) provided by the APIM team. All rules are listed in [asyncapiRulset](src/asyncapiRulset.ts) under the `rules` property.

### Recommended rules (26)

| Rule                                     | Severity |                                                                                                                                                                                 Description |
| ---------------------------------------- | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `asyncapi-channel-no-empty-parameter`    |  error   |                       Channel parameter declarations cannot be empty [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-channel-no-empty-parameter) |
|  |
| `asyncapi-channel-no-query-nor-fragment` |  error   | Query parameters and fragments shouldn't be used in channel names [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-channel-no-query-nor-fragment) |

|`asyncapi-channel-no-trailing-slash` | error | Keep trailing slashes off of channel names, as it can cause some confusion [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-channel-no-trailing-slash) |  
|`asyncapi-channel-parameters` | error | All channel parameters should be defined in the parameters object of the channel [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-channel-parameters) |

|`asyncapi-channel-servers` | warn | Channel servers must be defined in the servers object [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-channel-servers) |

|`asyncapi-headers-schema-type-object` | error | The schema definition of the application headers must be of type “object” [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-headers-schema-type-object) |

|`asyncapi-info-contact-properties` | warn | The asyncapi-info-contact rule will ask you to put in a contact object, and this rule will make sure it's full of the most useful properties: name, url, and email [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-info-contact-properties) |

|`asyncapi-info-contact` | warn | Info object should contain contact object [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-info-contact) |

|`asyncapi-info-description` | warn | AsyncAPI object info description must be present and non-empty string [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-info-description) |

|`asyncapi-info-license-url` | info | Mentioning a license is only useful if people know what the license means, so add a link to the full text for those who need it [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-info-license-url) |

|`asyncapi-info-license` | warn | The info object should have a license key. [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-info-license) |

|`asyncapi-latest-version` | info | Checking if the AsyncAPI document is using the latest version [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-latest-version) |

|`asyncapi-message-examples` | warn | All examples in message object should follow payload and headers schemas [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-message-examples) |

|`asyncapi-operation-description` | warn | Operation objects should have a description. [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-operation-description) |

|`asyncapi-operation-operationId-uniqueness` | error | OperationId must be unique across all the operations (except the ones defined in the components) [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-operation-operationId-uniqueness) |

|`asyncapi-operation-operationId` | error | Operation ID is essentially a reference for the operation and it must be present [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-operation-operationId) |

|`asyncapi-operation-security` | info | Operation security values must match a scheme defined in the components.securitySchemes object [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-operation-security) |

|`asyncapi-payload-default` | error | asyncapi-payload-default [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-payload-default) |

|`asyncapi-payload-examples` | error |Values of the examples array should be valid against the payload they decorate [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-payload-examples) |

|`asyncapi-payload-unsupported-schemaFormat` | info | Explicitly setting schemaFormat is not supported by Spectral, so if you use it this rule will emit an info message and skip validating the payload [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-payload-unsupported-schemaFormat) |

|`asyncapi-payload` | error | When schemaFormat is undefined, the payload object should be valid against the AsyncAPI 2 Schema Object definition [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-payload) |

|`asyncapi-schema-default` | error | Default objects should be valid against the schema they decorate[Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-schema-default) |

|`asyncapi-schema-examples` | error | Values of the examples array should be valid against the schema they decorate[Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-schema-examples) |

|`asyncapi-schema` | error | Validate structure of AsyncAPI v2 specification [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-schema) |

|`asyncapi-server-no-empty-variable` | error | Server URL variable declarations cannot be empty [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-server-no-empty-variable) |

|`asyncapi-server-no-trailing-slash` | warn | Server URL should not have a trailing slash [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-server-no-trailing-slash) |

|`asyncapi-server-not-example-com` | warn | Server URL should not point to example.com [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-server-not-example-com) |

|`asyncapi-server-security` | warn | Server security values must match a scheme defined in the components.securitySchemes object [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-server-security) |

|`asyncapi-server-variables` | warn | All server URL variables should be defined in the variables object of the server [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-server-variables) |

|`asyncapi-servers` | warn | A non-empty servers object is expected to be located at the root of the document [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-servers) |

|`asyncapi-tag-description` | info | Tags alone are not very descriptive. Give folks a bit more information to work with [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-tag-description) |

|`asyncapi-tag-description` | info | Tags alone are not very descriptive. Give folks a bit more information to work with [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-tag-description) |

|`asyncapi-tags-uniqueness` | warn | Tags must not have duplicate names (identifiers) [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-tags-uniqueness) |

|`asyncapi-tags` | warn | AsyncAPI object should have non-empty tags array [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-tags) |

|`asyncapi-unused-components-schema` | warn | Potential unused reusable schema entry has been detected [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-unused-components-schema) |

|`asyncapi-unused-components-server` | warn | Potential unused reusable server entry has been detected [Read more](https://docs.stoplight.io/docs/spectral/1e63ffd0220f3-async-api-rules#asyncapi-unused-components-server) |

## How to add and configure existing rules?

TBD

## How to create custom rules?

TBD

### :key: dependabot

By default, this action uses the `dependabot`

As described in the [official GitHub documentation](https://github.com/dependabot/dependabot-core):

> When you use the repository's dependabot finds and fixes vulnerabilities in your dependencies

### :key: release drafter

By default, this action uses the `release drafter`

As described in the [official GitHub documentation](https://github.com/marketplace/actions/release-drafter):

> When you use the repository's release drafter automatically creates a draft release on merge to main

### :pray: If you would like to contribute ?

1. Start a `discussion`
2. Create an `issue` with `feature request` or `bug` label
3. Clone and branch out
4. Push and create a PR

[Please follow this link to know more](https://github.com/ingka-group-digital/lint-asyncapi)
