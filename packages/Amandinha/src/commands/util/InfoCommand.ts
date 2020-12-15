import { Message, MessageEmbed } from 'discord.js';
import moment from 'moment';
import WatchClient from '../../client';
import Command from '../../structures/command';

import('moment-duration-format');

export default class InfoCommand extends Command {
  constructor(client: WatchClient) {
    super(client, 'info', {
      category: 'util',
    });
  }

  async run(message: Message): Promise<Message> {
    const embed = new MessageEmbed()
      .setTitle('BotInfo')
      .setColor('#f47fff')
      .addFields([
        {
          name: 'Ping',
          value: `**Host:** \`${Math.round(this.client.ws.ping)}\`ms\n**API:** \`${
            Date.now() - message.createdTimestamp
          }\`ms`,
          inline: false,
        },
        {
          name: 'Uptime',
          value: moment.duration(this.client.uptime).format('D[d], H[h], m[m], s[s]'),
          inline: false,
        },
        {
          name: '<:memoryram:762817135394553876> | Memória',
          value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`,
          inline: false,
        },
      ]);

    return message.channel.send(embed);
  }
}
