"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lint = void 0;
const spectral_core_1 = require("@stoplight/spectral-core");
const spectral_ref_resolver_1 = require("@stoplight/spectral-ref-resolver");
const ansi_styles_1 = __importDefault(require("ansi-styles"));
const fs_1 = __importDefault(require("fs"));
const asyncapiRuleset_1 = __importDefault(require("./asyncapiRuleset"));
function lint(filePaths) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`\nLinting "started inside linter.ts"...\n`);
        const errors = [];
        const spectral = new spectral_core_1.Spectral({ resolver: spectral_ref_resolver_1.httpAndFileResolver });
        spectral.setRuleset({ extends: [[asyncapiRuleset_1.default, 'all']] });
        for (const filePath of filePaths) {
            console.log(`\nLinting "${filePath}"...\n`);
            const asyncApiFile = fs_1.default.readFileSync(filePath, 'utf8');
            const problemList = yield spectral.run(asyncApiFile);
            formatResult(problemList, errors, filePath);
        }
        if (errors.length) {
            throw new Error(`Following files contain errors: ${errors.join(', ')}.`);
        }
    });
}
exports.lint = lint;
function formatResult(problemList, errors, filePath) {
    var _a, _b, _c, _d;
    for (const problemline of problemList) {
        const lineCol = `${(_a = problemline.range) === null || _a === void 0 ? void 0 : _a.start.line}:${(_b = problemline.range) === null || _b === void 0 ? void 0 : _b.start.character} to ${(_c = problemline.range) === null || _c === void 0 ? void 0 : _c.end.line}:${(_d = problemline.range) === null || _d === void 0 ? void 0 : _d.end.character}`;
        let coloredSeverity;
        if (problemline.severity === 0) {
            coloredSeverity = `${ansi_styles_1.default.red.open}"error"${ansi_styles_1.default.red.close}`;
        }
        else if (problemline.severity === 1) {
            coloredSeverity = `${ansi_styles_1.default.yellow.open}"warn"${ansi_styles_1.default.yellow.close}`;
        }
        else {
            coloredSeverity = `${ansi_styles_1.default.blueBright.open}"info"${ansi_styles_1.default.blueBright.close}`;
        }
        const linterPath = problemline.path.length === 0 ? '#' : problemline.path.join(' && ');
        const linterPointer = `${ansi_styles_1.default.underline.open} ${linterPath} ${ansi_styles_1.default.underline.close}`;
        const linterMessage = `  ${lineCol}  ${coloredSeverity}  ${problemline.message}  ${ansi_styles_1.default.bold.open}${problemline.code}${ansi_styles_1.default.bold.close}\n`;
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
        ? `${ansi_styles_1.default.yellow.open}${ansi_styles_1.default.bold.open}✖ ${problemsCountMessage} (${errorsCountMessage}, ${warningsCountMessage}, ${infoCountMessage})${ansi_styles_1.default.bold.close}${ansi_styles_1.default.yellow.close}\n`
        : `${ansi_styles_1.default.green.open}${ansi_styles_1.default.bold.open}No problems found in the provided OpenAPI specification file.${ansi_styles_1.default.bold.close}${ansi_styles_1.default.green.close}\n`;
    console.log(finalMessage);
    if (errorsCount) {
        errors.push(`"${filePath}"`);
        console.log(`"${filePath}" contains errors.\n`);
    }
    else {
        console.log(`"${filePath}" passes linting.\n`);
    }
}
