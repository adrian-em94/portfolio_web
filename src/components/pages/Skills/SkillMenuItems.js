import { Link } from "react-router-dom";
import "../../../components/Cards.css";

const SkillMenuItems = ({ skillMenu }) => {
  return (
    <>
      {skillMenu.map((item) => {
        return (
          <li className="cards__item">
            <Link className="cards__item__link" to={item.path}>
              <figure
                className="cards__item__pic-wrap"
                data-category={item.label}
              >
                <img
                  src={item.src}
                  alt="Projects or Skills"
                  className="cards__item__img"
                />
              </figure>
              <div className="cards__item__info">
                <div className="cards__item__text">{item.text}</div>
                <div className={item.tag}> {item.tag} </div>
              </div>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default SkillMenuItems;
