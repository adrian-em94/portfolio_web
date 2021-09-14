import "../components/VirtualBoxSection.css";
import ImageItem from "../components/ImageItem";

import AZ_Home from "../images/AZ-HomeResourceGroup.png";
import AZ_RG_Create from "../images/AZ-RG-Create.png";
import AZ_RG_Review from "../images/AZ-RG-Review.png";
import AZ_RG_Success from "../images/AZ-RG-Success.png";
import GreenCheck from "./GreenCheck/GreenCheck";

const CreateResourceGroup_Portal = () => {
  return (
    <>
      <p>Go to Azure Portal Home {">"} Resource Group</p>

      <div className="image_with_caption">
        <ImageItem
          src={AZ_Home}
          text="Resource Group"
          alt="A prompt showing the first step in creating a resource group"
        />
      </div>

      <p>
        Then Click "<b>Create</b>"
      </p>

      <div className="image_with_caption">
        <ImageItem
          src={AZ_RG_Create}
          text="Create Resource Group"
          alt="A prompt showing the user where to click the create button for the resource group creation"
        />
      </div>

      <p>If you have multiple Azure subscriptions, choose one</p>

      <p>
        Give the Resource Group a name {">"} Click “<b>Review + create</b>”{" "}
      </p>

      <div className="image_with_caption">
        <ImageItem
          src={AZ_RG_Review}
          text="Review & Create Resource Group"
          alt="A prompt that reviews the resource group details"
        />
      </div>

      <p>
        After validation is passed click “<b>Create</b>”
      </p>

      <div className="image_with_caption">
        <ImageItem
          src={AZ_RG_Success}
          text="Successfully Created Resource Group"
          alt="A prompt that reviews the resource group details"
        />
      </div>

      <GreenCheck />
    </>
  );
};

export default CreateResourceGroup_Portal;
