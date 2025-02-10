import type {AxiosResponse} from 'axios';
import {useFetch} from "@composables/fetch";


export async function getElements(): AxiosResponse<any> {
  try {
    const response: AxiosResponse<any> = await useFetch('/elements');

    return response.data;
  } catch (error) {
    console.error(`Ошибка сети: ${error}`);
  }
}

export async function getElementsByType(query: string): AxiosResponse<any> {
  try {
    const response: AxiosResponse<any> = await useFetch(`/elements?type=${query}`);

    return response.data;
  } catch (error) {
    console.error(`Ошибка сети: ${error}`);
  }
}

