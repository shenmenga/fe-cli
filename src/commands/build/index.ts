import { Args, Command, Flags } from '@oclif/core';
import * as path from 'node:path';
import * as fs from 'node:fs';

export default class Build extends Command {
    static description = 'build project and auto publish code to server';

    static examples = ['qm build --ip=', 'qm build --dir='];

    static flags = {
        help: Flags.help({ char: 'h' }),
        ip: Flags.help({ description: '服务器ip' }),
        dir: Flags.help({ description: '打包目录名称，默认同package.josn name' }),
    };

    static args = {
        person: Args.string({ description: 'Person to say hello to', required: true }),
    };

    async load() {
        const pkgPath = path.resolve(process.cwd(), 'package.json');
        const pkgFile = fs.readFileSync(pkgPath, { encoding: 'utf-8' });
        console.log(123, pkgFile);
    }

    async run(): Promise<void> {
        await this.load();
        const { args, flags } = await this.parse(Build);

        this.log(`build ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`);
    }
}
