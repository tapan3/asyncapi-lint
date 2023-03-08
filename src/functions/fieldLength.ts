import { createRulesetFunction } from '@stoplight/spectral-core';

export default createRulesetFunction(
  {
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
  },
  function fieldLength(input: string, options: { min: number }) {
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
    } catch (ex) {
      return [
        {
          message: ex instanceof Error ? ex.message : String(ex),
        },
      ];
    }
  }
);
