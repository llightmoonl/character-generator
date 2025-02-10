import type {AxiosResponse} from "axios";
import {useFetch} from "@composables/fetch.ts";


export async function getTabs(): AxiosResponse<any> {
  try {
    const response: AxiosResponse<any> = await useFetch('/tabs');

    return response.data;
  } catch (error) {
    console.error(`Ошибка сети: ${error}`);
  }
}
