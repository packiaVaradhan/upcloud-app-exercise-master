import { request } from 'api/apiClient';

async function getServers() {
  const response = await request({ method: 'get', url: '/server' });
  const servers = response.data.servers.server;
  return { data: servers, error: null, status: response.status };
}

export { getServers };
