export function fieldLength(input: string, options: { min: number }): object[] {
  if (!input) {
    return [];
  }
  if (input.length < options.min) {
    return [
      {
        message: `Write a well formatted brief description of your API with at least 30 char long.`,
      },
    ];
  }
  return [];
}
