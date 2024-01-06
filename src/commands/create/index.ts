// 创建项目
import { Args, Command, Flags } from '@oclif/core';
import * as path from 'node:path';
import * as fs from 'node:fs';
import { select } from '@inquirer/prompts';
import chalk from 'chalk';
import ora from 'ora';
const fse = require('fs-extra');

// 框架列表
const frameworkList = [
    { name: 'vue3+elementPlus', value: 'vue3-eleplus' },
    { name: 'vue3+antd', value: 'vue3-antd' },
    { name: 'monorepo', value: 'monorepo' },
    { name: 'uniapp', value: 'uniapp' },
    { name: 'nuxt3', value: 'nuxt3' },
    { name: 'vitepress-docs', value: 'vitepress-docs' },
    { name: 'nuxt2', value: 'nuxt2' }
];

export default class Create extends Command {
    static description = '初始化项目';

    // 命令demo
    static examples = ['fe create project-name'];

    // 选项
    static flags = {
        help: Flags.help({ char: 'h' })
    };

    // 参数
    static args = {
        name: Args.string({ description: 'create project name', required: false })
    };

    loading = ora();

    cwd = process.cwd();

    // 选择初始化框架
    async choose_framework() {
        const _res = await select({
            message: '选择技术栈和框架',
            choices: frameworkList
        });
        return _res;
    }

    // 下载模版
    async download_template(root: string, type: string) {
        this.loading.start('downloading...');
        const _src = path.join(__dirname, `../templates/${type}`);
        this.log(`--- ${__dirname} -- ${root}`);
        fse.copySync(_src, root);
        this.loading.succeed(chalk.blue(`download success`));
    }

    async run(): Promise<void> {
        const { flags, args } = await this.parse(Create);
        let _framework = flags.framework;
        if (!_framework) {
            _framework = await this.choose_framework();
        }
        const _root = path.join(this.cwd, args.name || _framework);
        await this.download_template(_root, _framework);
    }
}
