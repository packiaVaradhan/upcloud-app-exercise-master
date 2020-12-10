export interface IServer {
  hostname: string;
  state: 'started' | 'stopped' | 'error' | 'maintenance';
  title: string;
  uuid: string;
}

export interface IStorage {
  size: number;
  title: string;
  type: 'backup' | 'normal' | 'template';
  uuid: string;
}
