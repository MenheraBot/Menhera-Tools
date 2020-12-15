import { Message, MessageEmbed, User } from 'discord.js';
import moment from 'moment';
import WatchClient from '../../client';
import Command from '../../structures/command';

export default class UserInfoCommand extends Command {
  constructor(client: WatchClient) {
    super(client, 'userinfo', {
      category: 'util',
    });
  }

  async run(message: Message, args: Array<string>): Promise<Message> {
    moment.locale('pt-br');

    let member: User;
    if (args[0]) {
      try {
        member = await this.client.users.fetch(args[0].replace(/[<@!>]/g, ''));
      } catch {
        return message.channel.send('Usuário inexistente');
      }
    } else member = message.author;

    const status = `${member.presence.status}`
      .replace('dnd', '🔴 | Não Perturbe')
      .replace('idle', '🟡 | Ausente')
      .replace('offline', '⚪ | Offline')
      .replace('online', '🟢 | Online');
    const color = message.guild.member(member)
      ? message.guild.member(member).displayHexColor
      : '#000000';
    const avatar = member.displayAvatarURL({ dynamic: true, format: 'png' });

    const embed = new MessageEmbed()
      .setColor(color)
      .setThumbnail(avatar)
      .addField(':bookmark: Tag do Discord', `\`${member.tag}\``, true)
      .addField(':computer: ID do Discord', `\`${member.id}\``, true)
      .addField(
        ':trophy: Cargo mais Alto',
        message.guild.member(member)
          ? message.guild.member(member).roles.highest
          : '`USER NOT IN GUILD`',
        true
      )
      .addField('Status', status, true)
      .addField(
        ':star2: Entrou dia',
        message.guild.member(member)
          ? moment(message.guild.member(member).joinedAt).format('DD/MM/YYYY')
          : '`USER NOT IN GUILD`',
        true
      )
      .addField(':date: Conta criada dia', moment(member.createdAt).format('DD/MM/YYYY'), true);

    return message.channel.send(embed);
  }
}
