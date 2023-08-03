export const URL_GET_ALL_CHAMP =
  "https://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion.json";
export const URL_GET_CHAMP =
  "https://ddragon.leagueoflegends.com/cdn/11.23.1/data/en_US/champion/";

/* CONSTANT list champion */
export const FETCH_ALL_CHAMP_SUCCESS = "GET_ALL_CHAMP_SUCCESS";
export const FETCH_ALL_CHAMP_FAILED = "GET_ALL_CHAMP_FAILED";
export const FIND_CHAMP = "FIND_CHAMP";
export const SHOW_LOADING = "SHOW_LOADING";
export const HIDE_LOADING = "HIDE_LOADING";

/* CONSTANT Modal */
export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

/* CONSTANT champ info */
export const FETCH_CHAMP_SUCCESS = "FETCH_CHAMP_SUCCESS";
export const FETCH_CHAMP_FAILED = "FETCH_CHAMP_FAILED";

export const NAVBAR_LIST = [
  {
    name: "home",
  },
  {
    name: "introduction",
  },
  {
    name: "logo",
  },
  {
    name: "facebook",
  },
  {
    name: "tech",
  },
];

import Assassin from "../public/assets/icons/Assassin_icon.png";
import Fighter from "../public/assets/icons/Fighter_icon.png";
import Mage from "../public/assets/icons/Mage_icon.png";
import Marksman from "../public/assets/icons/Marksman_icon.png";
import Support from "../public/assets/icons/Support_icon.png";
import Tank from "../public/assets/icons/Tank_icon.png";
export const classifyChamp = {
  Assassin: Assassin,
  Fighter: Fighter,
  Mage: Mage,
  Support: Support,
  Marksman: Marksman,
  Tank: Tank,
};
