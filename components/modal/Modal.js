import React, { useState } from "react";
import * as actions from "../../actions";
import { useInfoChampContext } from "../../common/Context";
import { classifyChamp } from "../../constants";
import "./_modal.scss";
import LoadingScreen from "../loading/Loading";

function Modal() {
  const { stateInfoChamp, dispatchInfoChamp } = useInfoChampContext();
  const [state, setState] = useState({
    isOpenDes: false,
    description: "",
  });

  const { info, showLoading, showModal } = stateInfoChamp;

  const handleCloseModal = () => {
    dispatchInfoChamp(actions.hideModal());
  };

  const renderClassify = () => {
    let xhtml = [];
    info.tags.forEach((tag) => {
      xhtml.push(<img src={classifyChamp[tag]} />);
    });
    return xhtml;
  };

  const renderSkills = () => {
    let xhtml = [];
    let char = ["Q", "W", "E", "R"];
    let count = 0;
    info.skills.forEach((skill) => {
      xhtml.push(
        <div
          className="image-skill"
          onMouseEnter={() => showSkillDescription(skill.description)}
          onMouseLeave={() => hideSkillDescription()}
          data-name={skill.name}
        >
          <img src={skill.image} />
          <span>{char[count]}</span>
        </div>
      );
      count++;
    });
    return xhtml;
  };

  function renderContent() {
    return (
      <>
        <div className="box-left col c-3 m-0">
          <img
            src={
              "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" +
              info.avatar
            }
            alt=""
          />
        </div>
        <div className="box-right col c-9  m-12">
          <div className="info-wrapper">
            <div className="title">
              <h1 className="name">{info.name}</h1>
              <h2 className="sub-name">{info.title}</h2>
              <span className="close" onClick={handleCloseModal}>
                X
              </span>
            </div>
            <div className="content">
              <div className="content-group-1">
                <div className="avatar">
                  <div className="label">avatar:</div>
                  <img
                    src={
                      "https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/" +
                      info.square
                    }
                    alt=""
                  />
                </div>
                <div className="classify">
                  <div className="label">classify:</div>
                  {renderClassify()}
                </div>
              </div>

              <div className="content-group-2">
                <div className="ability">
                  <div className="label">Skill:</div>
                  <div className="skill">
                    <div className="image-skill" data-name={info.passive.name}>
                      <img src={info.passive.image} alt="" />
                      <span>Passive</span>
                    </div>
                    {renderSkills()}
                    {state.isOpenDes ? (
                      <div className="skill-description">
                        {state.description}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="content-group-3">
                <div className="description">
                  <div className="label">Description: </div>
                  <p className="description-champ">{info.lore}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className={`modal champ-info ${showModal && "active"}`}>
      <div className="modal-wrapper container">
        <div
          className={`modal-box row`}
          style={{
            backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${info.splash})`,
          }}
        >
          {showLoading ? (
            <LoadingScreen myFlag={true} />
          ) : Object.keys(info).length === 0 ? (
            <LoadingScreen onClick={handleCloseModal} myFlag={false} />
          ) : (
            renderContent()
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
