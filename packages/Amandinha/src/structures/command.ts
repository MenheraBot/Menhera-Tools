import { Message, PermissionString } from 'discord.js';
// eslint-disable-next-line import/no-cycle
import WatchClient from '../client';

interface CommandConfig {
  category: string;
  aliases: Array<string>;
  UserPermission: Array<PermissionString>;
  ClientPermissions: Array<PermissionString>;
  OnlyDevs: boolean;
  dir?: string;
}

export default abstract class Command {
  public client!: WatchClient;

  public config: CommandConfig;

  public name: string;

  public abstract run(message: Message, args: Array<string>): unknown;

  public dir!: string;

  constructor(client: WatchClient, name: string, options: Partial<CommandConfig>) {
    this.client = client;
    this.name = name;
    this.config = {
      category: options.category || 'dev',
      aliases: options.aliases || [],
      UserPermission: options.UserPermission || null,
      ClientPermissions: options.ClientPermissions || null,
      OnlyDevs: options.OnlyDevs || false,
    };
  }
}
