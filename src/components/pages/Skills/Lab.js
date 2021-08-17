import "../../VirtualBoxSection.css";
import ImageItem from "../../ImageItem";
import TCP from "../../../images/tcp-ipv4.png";
import StaticIP from "../../../images/changeStaticIP.png";
import HostNetwork from "../../../images/HostNetworkManager.png";
import GreenCheck from "../../GreenCheck/GreenCheck";

const Lab = () => {
  return (
    <div className="bg_white">
      <div className="template_container">
        <h1>
          Create a Lab Environment
          <br />
          VirtualBox Windows Server 2016 on MAC
        </h1>

        <p>
          Open Control Panel {">"} View Network Status and Tasks {">"} Change
          adapter settings
        </p>

        <p>
          Right click on Ethernet {">"} Properties {">"} double click TCP IPv4
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={TCP}
            text="TCP/IPv4"
            alt="A prompt showing the user their network options and configurations"
          />
        </div>

        <p>
          Now you must add a private IP address and default gateway alog with
          the private DNS Server
        </p>

        <p>See the image below for an example</p>

        <div className="image_with_caption">
          <ImageItem
            src={StaticIP}
            text="Change Static IP"
            alt="A prompt giving the user the option to obtain IP address automatically or manually"
          />
        </div>

        <p>
          In VirtualBox go to File {">"} Host Network Manager {">"} Create
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={HostNetwork}
            text="Create Host Network Manager"
            alt="A prompt illustrating the options to create, remove, or select properties of a host network"
          />
        </div>

        <p>
          Then in VirtualBoxVM {">"} Device {">"} Network {">"} Network Settings
        </p>

        <p>
          The drop down next to <b>"Attacked to:"</b> should be{" "}
          <b>"Host-only Adapter"</b> then click <b>"OK"</b>
        </p>

        <p>
          Apply the same setting to both Windows Server and Windows 10 client
        </p>

        <GreenCheck />
      </div>
    </div>
  );
};

export default Lab;
