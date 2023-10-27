// 创建项目
import { Args, Command, Flags } from '@oclif/core';
import * as path from 'node:path';
import * as fs from 'node:fs';
import { select } from '@inquirer/prompts';
import chalk from 'chalk';
import ora from 'ora';
const downloadGitRepo = require('download-git-repo');
// 框架列表
const frameworkList = [
    { name: 'vue3+elementPlus', value: 'eleplus' },
    { name: 'vue3+antd', value: 'antd' },
    { name: 'uniapp', value: 'uniapp' },
    { name: 'nuxt3', value: 'nuxt3' },
    { name: 'nuxt2', value: 'nuxt2' },
    { name: 'vue2', value: 'vue2' }
];

export default class Create extends Command {
    static description = '初始化项目';

    // 命令demo
    static examples = ['fe create --f=eleplus'];

    // 非必填参数
    static flags = {
        help: Flags.help({ char: 'h' }),
        framework: Flags.string({ char: 'f', description: '指定框架' })
    };

    // 必填参数
    static args = {};

    loading = ora();

    // 选择初始化框架
    async choose_framework() {
        const _res = await select({
            message: '选择技术栈和框架',
            choices: frameworkList
        });
        return _res;
    }

    // 下载代码，根据type获取对应的目录
    // download-git-repo
    async download_project(type: string) {
        this.loading.start('downloading...');
        downloadGitRepo('git@codeup.aliyun.com:qimao/front/vue-project.git', 'template', { clone: true }, (err: any) => {
            if (err) {
                this.loading.fail(chalk.red(`download fail`));
            } else {
                this.loading.succeed(chalk.blue(`download success`));
            }
        });
    }

    async run(): Promise<void> {
        const { flags } = await this.parse(Create);
        let _framework = flags.framework;
        if (!_framework) {
            _framework = await this.choose_framework();
        }
        await this.download_project(_framework);
    }
}
