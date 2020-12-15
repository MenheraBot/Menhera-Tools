/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-shadow */
import { Client, Collection, ClientOptions } from 'discord.js';
import FileUtil from './util/FileUtis';
// eslint-disable-next-line import/no-cycle
import Command from './structures/command';
// eslint-disable-next-line import/no-cycle
import EventManager from './structures/EventManager';
import Event from './structures/event';

export default class WatchClient extends Client {
  public commands: Collection<string, Command> = new Collection();

  public aliases: Collection<string, string> = new Collection();

  public events: EventManager = new EventManager(this);

  constructor(option: ClientOptions = {}) {
    super(option);
  }

  async login(token: string): Promise<string> {
    return super.login(token);
  }

  async loadCommand(command: Command, filepath: string): Promise<void> {
    command.dir = filepath;
    this.commands.set(command.name, command);
    this.aliases.set(command.name, command.name);
    command.config.aliases.forEach(a => this.aliases.set(a, command.name));
  }

  async loadEvent(event: Event): Promise<void> {
    this.events.add(event);
  }

  loadCommands(directory: string): unknown {
    return FileUtil.readDirectory<Command>(directory, this, (cmd, filepath) => {
      this.loadCommand(cmd, filepath);
    });
  }

  loadEvents(directory: string): unknown {
    return FileUtil.readDirectory<Event>(directory, this, evt => {
      this.loadEvent(evt);
    });
  }
}
