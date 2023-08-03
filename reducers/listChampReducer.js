import * as actionTypes from "../constants";

export const initState = { listChamp: [], showLoading: true };

export const reducer = (state = initState, action) => {
  switch (action.type) {
    /* *** */
    case actionTypes.FETCH_ALL_CHAMP_SUCCESS: {
      const { data } = action.payLoad;
      const listChamp = [];
      for (let champ in data.data) {
        const { id, name, tags, image } = data.data[champ];
        listChamp.push({
          id: id,
          name: name,
          tags: tags,
          avatar: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${modifyFileSuffix(
            image.full
          )}_0.jpg`,
        });
      }
      return { ...state, listChamp };
    }

    /* *** */
    case actionTypes.FETCH_ALL_CHAMP_FAILED:
      return { ...state, listChamp: [] };

    /* *** */
    case actionTypes.FIND_CHAMP: {
      const { data } = action.payLoad;
      const { pattern } = action.payLoad;
      let listChamp = [];
      for (let champ in data.data) {
        const { id, name, tags, image } = data.data[champ];
        listChamp.push({
          id: id,
          name: name,
          tags: tags,
          avatar: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${modifyFileSuffix(
            image.full
          )}_0.jpg`,
        });
      }
      listChamp = listChamp.filter((champion) =>
        champion.name.toLowerCase().includes(pattern)
      );
      return { ...state, listChamp };
    }

    case actionTypes.SHOW_LOADING: {
      return { ...state, showLoading: true };
    }

    case actionTypes.HIDE_LOADING: {
      return { ...state, showLoading: false };
    }
    default:
      return state;
  }
};

const modifyFileSuffix = (img) => {
  return img.replace(".png", "");
};
