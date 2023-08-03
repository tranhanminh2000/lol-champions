import AxiosService from "../common/AxiosService.js";
import { URL_GET_ALL_CHAMP, URL_GET_CHAMP } from "../constants";

export const getAllChampRequest = () => AxiosService.get(URL_GET_ALL_CHAMP);
export const getChampRequest = (name) =>
  AxiosService.get(URL_GET_CHAMP + name + ".json");
