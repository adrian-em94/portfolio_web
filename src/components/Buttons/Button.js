import "../Buttons/Button.css";

const Button = ({ button, filter }) => {
  return (
    <div className="button_container">
      {button.map((tag, i) => {
        return (
          <button className="butt" type="button" onClick={() => filter(tag)}>
            {tag}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
