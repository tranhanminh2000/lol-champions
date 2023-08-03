import React, { useReducer } from "react";
import { ListChampContext, InfoChampContext } from "../../common/Context";
import ListChamp from "../listChamp/ListChamp";
import SearchBar from "../SearchBar/SearchBar";
import Modal from "../modal/Modal";
import * as listChampReducer from "../../reducers/listChampReducer";
import * as infoChampReducer from "../../reducers/infoChampReducer";

function Section(props, ref) {
  //List champ reducer config
  const [stateListChamp, dispatchListChamp] = useReducer(
    listChampReducer.reducer,
    listChampReducer.initState
  );
  const listChampProvider = { stateListChamp, dispatchListChamp };

  //info champ reducer config
  const [stateInfoChamp, dispatchInfoChamp] = useReducer(
    infoChampReducer.reducer,
    infoChampReducer.initState
  );
  const infoChampProvider = { stateInfoChamp, dispatchInfoChamp };
  const sectionRef = React.useRef();

  React.useImperativeHandle(ref, () => ({
    scrollToSection() {
      const offsetTop = sectionRef.current.offsetTop - 86; //86px from navbar
      window.scrollTo(0, offsetTop);
    },
  }));

  return (
    <div className="section" id="section" ref={sectionRef}>
      <div className="wrapper container">
        <InfoChampContext.Provider value={infoChampProvider}>
          <ListChampContext.Provider value={listChampProvider}>
            <SearchBar />
            <ListChamp />
            <Modal />
          </ListChampContext.Provider>
        </InfoChampContext.Provider>
      </div>
    </div>
  );
}

export default React.forwardRef(Section);
