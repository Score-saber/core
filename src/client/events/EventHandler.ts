import { Discord, On, Once, ArgsOf } from '@typeit/discord';
import Client from '../ScoreSaberBot';

@Discord()
export default class EventHandler {
    @Once('ready')
    private async onReadyEvent([]: ArgsOf<"ready">, client: Client) {
        console.log(`Bot Connected`);
    }
}