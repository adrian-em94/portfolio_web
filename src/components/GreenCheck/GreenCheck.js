import Green_Check from "../../images/GreenCheck.svg";
import "./GreenCheck.css";

const GreenCheck = () => {
  return (
    <div className="outerContainer">
      <img src={Green_Check} className="green_check" alt="a green checkmark" />
    </div>
  );
};

export default GreenCheck;
