import { IServer, IStorage } from 'upcloud';

const hostnameCompare = (a: IServer, b: IServer) =>
  a.hostname.localeCompare(b.hostname);

const titleCompare = (a: IStorage, b: IStorage) =>
  a.title.localeCompare(b.title);

export { hostnameCompare, titleCompare };
