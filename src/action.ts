import * as core from '@actions/core';
import { lint } from './linter';

async function runAction(): Promise<void> {
  try {
    console.log('inside actions.ts');
    const filePaths = core.getMultilineInput('files', { required: true });
    await lint(filePaths);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

runAction();
