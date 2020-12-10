import { request } from 'api/apiClient';

async function getStorage() {
  const response = await request({ method: 'get', url: '/storage' });
  const storage = response.data.storages.storage;
  return { data: storage, error: null, status: response.status };
}

export { getStorage };
