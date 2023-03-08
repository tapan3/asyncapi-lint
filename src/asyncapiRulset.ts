import { aas2 } from '@stoplight/spectral-formats';
import { defined, pattern } from '@stoplight/spectral-functions';
import { asyncapi } from '@stoplight/spectral-rulesets';
import { fieldLength } from './functions/fieldLength';

export default {
  formats: [aas2],
  extends: asyncapi,
  rules: {
    'valid-document-version': {
      message: 'Version should match 1.x.x',
      severity: 'warn',
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
    'valid-field-length': {
      message: '{{error}}',
      severity: 'warn',
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
