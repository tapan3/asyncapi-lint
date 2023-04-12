import { aas2 } from '@stoplight/spectral-formats';
import { defined, pattern } from '@stoplight/spectral-functions';
import { asyncapi } from '@stoplight/spectral-rulesets';
import { fieldLength } from './functions/fieldLength';

export default {
  formats: [aas2],
  extends: asyncapi,
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
          function: defined,
        },
        {
          field: 'version',
          function: pattern,
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
        function: fieldLength,
        functionOptions: {
          min: 30,
        },
      },
    },
  },
};
