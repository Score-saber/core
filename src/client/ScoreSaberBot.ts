import { Client } from '@typeit/discord';

interface Options { token?: string; }

export default class ScoreSaberBot extends Client {
    public config: Options;

    public constructor(config: Options) {
        super();

        this.config = config;
    }

    public async start(): Promise<string> {
        return this.login(this.config.token);
    };
};