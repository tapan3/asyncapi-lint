import { ISpectralDiagnostic, RulesetDefinition, Spectral } from '@stoplight/spectral-core';
import { httpAndFileResolver } from '@stoplight/spectral-ref-resolver';
import styles from 'ansi-styles';
import fs from 'fs';
import asyncApiRuleset from './asyncapiRuleset';

export async function lint(filePaths: string[]): Promise<void> {
  console.log(`\nLinting "started inside linter.ts"...\n`);
  const errors: string[] = [];
  const spectral = new Spectral({ resolver: httpAndFileResolver });
  spectral.setRuleset({ extends: [[asyncApiRuleset as RulesetDefinition, 'all']] });

  for (const filePath of filePaths) {
    console.log(`\nLinting "${filePath}"...\n`);
    const asyncApiFile = fs.readFileSync(filePath, 'utf8');
    const problemList = await spectral.run(asyncApiFile);
    formatResult(problemList, errors, filePath);
  }
  if (errors.length) {
    throw new Error(`Following files contain errors: ${errors.join(', ')}.`);
  }
}

function formatResult(problemList: ISpectralDiagnostic[], errors: string[], filePath: string): void {
  for (const problemline of problemList) {
    const lineCol = `${problemline.range?.start.line}:${problemline.range?.start.character} to ${problemline.range?.end.line}:${problemline.range?.end.character}`;
    let coloredSeverity;
    if (problemline.severity === 0) {
      coloredSeverity = `${styles.red.open}"error"${styles.red.close}`;
    } else if (problemline.severity === 1) {
      coloredSeverity = `${styles.yellow.open}"warn"${styles.yellow.close}`;
    } else {
      coloredSeverity = `${styles.blueBright.open}"info"${styles.blueBright.close}`;
    }
    const linterPath = problemline.path.length === 0 ? '#' : problemline.path.join(' && ');
    const linterPointer = `${styles.underline.open} ${linterPath} ${styles.underline.close}`;
    const linterMessage = `  ${lineCol}  ${coloredSeverity}  ${problemline.message}  ${styles.bold.open}${problemline.code}${styles.bold.close}\n`;
    console.log(linterPointer);
    console.log(linterMessage);
  }
  const problemsCount = problemList.length;
  const problemsCountMessage = `${problemsCount} problem${problemsCount === 1 ? '' : 's'}`;
  const errorsCount = problemList.filter(problem => problem.severity === 0).length;
  const errorsCountMessage = `${errorsCount} error${errorsCount === 1 ? '' : 's'}`;
  const warningsCount = problemList.filter(problem => problem.severity === 1).length;
  const warningsCountMessage = `${warningsCount} warning${warningsCount === 1 ? '' : 's'}`;
  const infoCount = problemList.filter(problem => problem.severity === 2).length;
  const infoCountMessage = `${infoCount} info${infoCount === 1 ? '' : 's'}`;

  const finalMessage = problemsCount
    ? `${styles.yellow.open}${styles.bold.open}✖ ${problemsCountMessage} (${errorsCountMessage}, ${warningsCountMessage}, ${infoCountMessage})${styles.bold.close}${styles.yellow.close}\n`
    : `${styles.green.open}${styles.bold.open}No problems found in the provided OpenAPI specification file.${styles.bold.close}${styles.green.close}\n`;

  console.log(finalMessage);

  if (errorsCount) {
    errors.push(`"${filePath}"`);
    console.log(`"${filePath}" contains errors.\n`);
  } else {
    console.log(`"${filePath}" passes linting.\n`);
  }
}
