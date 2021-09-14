import { useState } from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import SkillData from "../data/SkillData";
import SkillMenuItems from "./pages/Skills/SkillMenuItems";
import Button from "../components/Buttons/Button";

const SkillSection = () => {
  const allFilterTags = ["All", ...new Set(SkillData.map((item) => item.tag))];
  const [skillMenu, setskillMenu] = useState(SkillData);
  const [buttons, setbuttons] = useState(allFilterTags);

  const filter = (buttonInput) => {
    if (buttonInput === "All") {
      setskillMenu(SkillData);
      return;
    }
    const filteredData = SkillData.filter((item) => item.tag === buttonInput);
    setskillMenu(filteredData);
  };

  return (
    <div className="cards">
      <h1>Skills</h1>
      <div className="filter_buttons">
        <Button button={buttons} filter={filter} skillMenu={skillMenu} />
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__item__fixed">
            <SkillMenuItems skillMenu={skillMenu} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
