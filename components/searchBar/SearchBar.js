import React, { useRef } from "react";
import * as actions from "../../actions";
import { useListChampContext } from "../../common/Context";
import Button from "../button/Button";
import "regenerator-runtime/runtime";
import { getAllChampRequest } from '../../apis/champApis';

function SearchBar() {
  const { stateListChamp , dispatchListChamp } = useListChampContext();

  const inputRef = useRef();

  const delay = (time = 1500) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const findChampion = async () => {
    const name = inputRef.current.value.toLowerCase().trim();
    try {
      const res = await getAllChampRequest();
      if (res) {
        dispatchListChamp(actions.showLoading());
        await delay(500);
        dispatchListChamp(actions.findChamp(name, res.data));
        dispatchListChamp(actions.hideLoading());
      }
    } catch (error) {
      dispatchListChamp(actions.showLoading());
      await delay(500);
      dispatchListChamp(actions.fetchAllChampFailed());
      dispatchListChamp(actions.hideLoading());
    }
  };

  const fetchChampions = async () => {
    try {
      const res = await getAllChampRequest();
      if (res) {
        dispatchListChamp(actions.showLoading());
        await delay(100)
        dispatchListChamp(actions.fetchAllChampSuccess(res.data));
        dispatchListChamp(actions.hideLoading());
      }
    } catch (error) {
      dispatchListChamp(actions.showLoading());
      dispatchListChamp(actions.fetchAllChampFailed());
      dispatchListChamp(actions.hideLoading());
    }
  };

  const handleInputChange = () => {
    if (inputRef.current.value === "") {
      fetchChampions();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        name=""
        onChange={handleInputChange}
        placeholder="Write something"
        ref={inputRef}
        id="txtSearch"
      />
      <Button handleClick={findChampion}>Search</Button>
    </div>
  );
}

export default SearchBar;
