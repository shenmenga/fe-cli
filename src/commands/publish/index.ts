// 发布npm包
import { Args, Command, Flags } from '@oclif/core';
import * as path from 'node:path';
import * as fs from 'node:fs';
import { execSync } from 'node:child_process';
import { select } from '@inquirer/prompts';

/**
 * 发布npm包
 * 1. 若为master分支打包正式版本
 * 2. 其他打包为测试版本
 */

const publishVerisonList = [
    { name: 'major', value: 'major' },
    { name: 'minor', value: 'minor' },
    { name: 'patch', value: 'patch' },
];
export default class Publish extends Command {
    static description = 'publish project to npm , ';

    static examples = ['fe publish'];

    static flags = {
        help: Flags.help({ char: 'h' }),
    };

    static args = {
        person: Args.string({ description: 'Person to say hello to', required: true }),
    };

    async init() {
        // 获取当前git分支
        const currentGitName = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
        if (currentGitName !== 'master') {
            execSync('npm version prerelease --preid beta').toString();
            execSync('npm publish --tag beta');
            execSync('git add .');
            execSync(`git commit -m "feat: auto upgrade beta version"`);
            execSync('git push origin');
        } else {
            const version = await select({
                message: '选择升级的版本',
                choices: publishVerisonList,
            });
            execSync(`npm version ${version}`);
            execSync('npm publish');
        }
    }

    async run(): Promise<void> {
        await this.init();
        // const { args, flags } = await this.parse(Publish);
    }
}
