import axios from 'axios';

type Platform = 'xbx' | 'ps4';

interface Server {
  Name: string;
}

export async function Query({ name, platform }: { name: string; platform: Platform }): Promise<Server[]> {
  if (!platform) {
    throw new Error('Invalid Query: Platform is required');
  }

  const endpoints = {
    xbx: 'http://arkdedicated.com/xbox/cache/unofficialserverlist.json',
    ps4: 'http://arkdedicated.com/ps4/cache/unofficialserverlist.json',
  };

  const endpoint = endpoints[platform];
  if (!endpoint) {
    throw new Error(`Unsupported Platform: ${platform}`);
  }

  const response = await axios.get<Server[]>(endpoint);
  return response.data.filter(server => name && name.trim().length > 0 ? server.Name.includes(name) : true);
}