export function fieldLength(input: string, options: { min: number }): object[] {
  try {
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
