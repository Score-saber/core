import { Discord, CommandMessage, Command, CommandNotFound } from '@typeit/discord';

@Discord("@!")
export default class CommandHandler {
    @CommandNotFound()
    private async commandNotFound(message: CommandMessage) {

    }

    @Command("ping")
    private async ping(message: CommandMessage) {
        message.reply("pong");
    }
}