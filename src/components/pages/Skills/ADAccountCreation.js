import "../../VirtualBoxSection.css";
import ImageItem from "../../ImageItem";
import UsersComputers from "../../../images/UsersandComputers.png";
import NewUser from "../../../images/NewUser.png";
import AddPassword from "../../../images/PasswordAddition.png";
import GreenCheck from "../../GreenCheck/GreenCheck";

const ADAccountCreation = () => {
  return (
    <div className="bg_white">
      <div className="template_container">
        <h1>
          Active Directory Account Creation
          <br />
          Windows Server 2016
        </h1>

        <p>
          Open Server Manager {">"} Tools {">"} Active Directory Users and
          Computers
        </p>

        <p>
          On the left navigation pane, inside the domain, find the users folder
          and highlight it
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={UsersComputers}
            text="Active Directory Users and Computers"
            alt="A windows that depicts the active directory of the users and computers"
          />
        </div>

        <p>
          Then click <b>"Action"</b> {">"} New User
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={NewUser}
            text="New User"
            alt="A windows with inputs for standard profile user attributes like first name and last name"
          />
        </div>

        <p>
          Add a password, then click <b>"Next"</b>
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={AddPassword}
            text="Add A Password"
            alt="A windows with two inputs for password and confirmation of password"
          />
        </div>

        <GreenCheck />
      </div>
    </div>
  );
};

export default ADAccountCreation;
