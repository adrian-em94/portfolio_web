import "../components/VirtualBoxSection.css";
import ImageItem from "../components/ImageItem";
import AZ_CloudShell from "../images/AZ-CloudShell.png";
import AZ_CreateRG_CLI from "../images/AZ-RGCLI-create.png";
import AZ_SuccessRG_CLI from "../images/AZ-RGCLI-success.png";
import GreenCheck from "./GreenCheck/GreenCheck";

const CreateResourceGroup_CLI = () => {
  return (
    <>
      <p>
        On the Azure Portal Home Page {">"} Click the Power Shell button on the
        top navigation bar
      </p>

      <div className="image_with_caption">
        <ImageItem
          src={AZ_CloudShell}
          text="CloudShell on Azure Portal navbar"
          alt="A prompt showing the user where the cloudshell button is in the azure portal navbar"
        />
      </div>

      <p>Type or Copy and Paste the following script:</p>

      <p>
        <b>
          az group create --name “Insert Resource Group Name” --location “Insert
          location: default is ‘eastus’”
        </b>
      </p>

      <p>
        Note: Insert the proper information in the quoted areas that say insert
      </p>

      <div className="image_with_caption">
        <ImageItem
          src={AZ_CreateRG_CLI}
          text="CloudShell"
          alt="A prompt showing the user where the cloudshell button is in the azure portal navbar"
        />
      </div>

      <p>Now navigate back to Resource Groups and see if it was created</p>

      <div className="image_with_caption">
        <ImageItem
          src={AZ_SuccessRG_CLI}
          text="Resource Group Successfully Created"
          alt="A prompt showing the user where the cloudshell button is in the azure portal navbar"
        />
      </div>

      <GreenCheck />
    </>
  );
};

export default CreateResourceGroup_CLI;
