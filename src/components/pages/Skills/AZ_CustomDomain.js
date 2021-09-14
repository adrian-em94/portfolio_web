import "../../VirtualBoxSection.css";
import ImageItem from "../../ImageItem";
import AddCustomDomain from "../../../images/AZ-AddCustomDomain.png";
import AddCustomDomainInput from "../../../images/AZ-AddCustomDomainInput.png";
import TXTRecordAzure from "../../../images/AZ-TXTRecordAzure.png";
import TXTRecordGoDaddy from "../../../images/AZ-TXTRecordGoDaddy.png";
import Verified from "../../../images/AZ-verified.png";
import GreenCheck from "../../GreenCheck/GreenCheck";

const AZ_CustomDomain = () => {
  return (
    <div className="bg_white">
      <div className="template_container">
        <h1>Microsoft Azure - Add Custom Domain</h1>
        <p>
          To add a custom domain to the Azure active directory, you must first
          have already bought and own a domain. For this example, I used GoDaddy
          to purchase a domain and continue the lab.
        </p>

        <p>Inside the Azure portal {">"} Azure Active Directory</p>

        <p>
          On the left panel, under “<b>Manage</b>” {">"} Custom domain names{" "}
          {">"} Add custom domain
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={AddCustomDomain}
            text="Adding a Custom Domain"
            alt="A prompt showing the user where to find the button for adding a custom domain"
          />
        </div>

        <p>
          Add the custom domain name that you have ownership of on the right
          panel {">"} Add domain
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={AddCustomDomainInput}
            text="Input the Domain"
            alt="A prompt showing the user where to input the custom domain"
          />
        </div>

        <p>
          Once the domain has been added, a text record needs be created on the
          DNS Settings of your domain manager.
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={TXTRecordAzure}
            text="Add a TXT Record"
            alt="A prompt showing the user where to input the custom domain"
          />
        </div>

        <p>
          In this case, I used GoDaddy, so I navigated over to GoDaddy’s domain
          manager, and under my domains DNS Settings I added the TXT record that
          was given by Microsoft Azure.
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={TXTRecordGoDaddy}
            text="Add TXT Record from Azure"
            alt="A prompt showing the user where to add the text record in GoDaddy"
          />
        </div>

        <p>
          Once the txt record has been added to the DNS settings of the domain
          manager, then you can go back to the Azure portal and click “
          <b>Verify</b>”
        </p>

        <p>
          Note: The verification process is estimated to take a maximum of 24
          hours…. however in my experience it takes a matter of minutes if done
          correctly.
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={Verified}
            text="Custom Domain Verified"
            alt="A prompt that displays the status of the domain to be verified"
          />
        </div>

        <p>
          After the domain has been verified, then you can click “
          <b>Make primary</b>”
        </p>

        <GreenCheck />
      </div>
    </div>
  );
};

export default AZ_CustomDomain;
