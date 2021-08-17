import "../../VirtualBoxSection.css";
import ImageItem from "../../ImageItem";
import ADDS from "../../../images/addRoles_andFeatures.png";
import InstallationType from "../../../images/InstallationType.png";
import DestinationServer from "../../../images/destination_server.png";
import ADDSServerRole from "../../../images/ActiveDirectory_domainservices.png";
import PromoteDomainController from "../../../images/promote_toDomainController.png";
import NewForest from "../../../images/newforest.png";
import AddPassword from "../../../images/add_password.png";
import PreReqCheck from "../../../images/prerequisites_check.png";
import GreenCheck from "../../GreenCheck/GreenCheck";

const ActiveDirectory = () => {
  return (
    <div className="bg_white">
      <div className="template_container">
        <h1>
          Installing Active Directory Domain Services
          <br />
          On Windows Server 2016
        </h1>

        <p>
          Open Server Manager {">"} Go to <strong>"Manage"</strong> {">"} Add
          Roles and Features
          <br />
          Hit Next
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={ADDS}
            text="Server Manager"
            alt="Server Manager UI that has the add roles and features highlighted under the Manage menu item"
          />
        </div>

        <h4>Installation Type</h4>
        <p>
          Click <strong>"Role-based or Feature-based installation" </strong>
          <br />
          Then hit <strong>"Next"</strong>
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={InstallationType}
            text="Installation Type"
            alt="Prompt that is asking the user to choose between role based installation or remote desktop services installation"
          />
        </div>

        <h4>Destination Server</h4>
        <p>
          Choose the server that you would like to add Active Directory Domain
          Services to
          <br />
          Then hit <strong>"Next"</strong>
        </p>
        <div className="image_with_caption">
          <ImageItem
            src={DestinationServer}
            text="Destination Server"
            alt="Prompt that is asking the user to choose the a server that will have the features installed"
          />
        </div>

        <h4>Server Roles</h4>
        <p>
          Highlight <strong>"Active Directory Domain Services</strong>
          <br />
          Hit <strong>"Next"</strong>
          <br />A prompt may come up warning the user that other services will
          need to be added along with the chosen role service or features
          <br />
          Click <b>"Add Features"</b>
          <br />
          Click <b>"Install"</b>
        </p>
        <div className="image_with_caption">
          <ImageItem
            src={ADDSServerRole}
            text="Server Roles"
            alt="Prompt that is asking the user to choose the server roles that would like to be added"
          />
        </div>

        <p>
          Click <b>"Promote this server to a domain controller"</b>
        </p>
        <div className="image_with_caption">
          <ImageItem
            src={PromoteDomainController}
            text="Promote to domain controller"
            alt="Prompt that is showing the user the progress of installation and also highlighting the option to Promote the server to a domain controller"
          />
        </div>

        <h4>Deployment Configuration</h4>
        <p>
          Choose the radio button option <b>"Add a new forest"</b> and choose a
          root domain name
          <br />
          Then hit <b>"Next"</b>
        </p>
        <div className="image_with_caption">
          <ImageItem
            src={NewForest}
            text="Add a new forest"
            alt="Prompt that is asking the user to choose a root domain name"
          />
        </div>

        <h4>Domain Controller Options</h4>
        <p>
          Create a password for the Directory Services Restore Mode (DSRM) and
          retype to confirm
          <br />
          Then click <b>"Next"</b>
        </p>
        <div className="image_with_caption">
          <ImageItem
            src={AddPassword}
            text="Add a password to DSRM"
            alt="Prompt that is asking the user to create a password and retype to confirm"
          />
        </div>

        <p>
          Verify the NETBIOS domain name then click <b>"Next"</b>
          <br />
          For the paths page also click <b>"Next"</b>
          <br />
          For the Review Options page also click <b>"Next"</b>
          <br />
          For the Prerequisites Check page click <b>"Install"</b>
        </p>
        <div className="image_with_caption">
          <ImageItem
            src={PreReqCheck}
            text="Final Check before Installation"
            alt="Prompt that is telling the user of the prerequsites and instructing the user to click install to begin installation"
          />
        </div>

        <GreenCheck />
      </div>
    </div>
  );
};

export default ActiveDirectory;
