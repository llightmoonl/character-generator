import axios from '@/api/axios';
import type {CreateAxiosDefaults, AxiosResponse} from 'axios';

export async function useFetch(url: string, axiosOptions?: CreateAxiosDefaults): AxiosResponse<any> {
  const config = {
    url,
    ...axiosOptions,
  }

  try {
    const response: AxiosResponse<any> = await axios(config);

    return response;
  }
  catch (error) {
    console.error(`Ошибка сети: ${error}`);
  }
}