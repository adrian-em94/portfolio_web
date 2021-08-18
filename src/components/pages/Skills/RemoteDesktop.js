import "../../VirtualBoxSection.css";
import ImageItem from "../../ImageItem";

const RemoteDesktop = () => {
  return (
    <div className="bg_white">
      <div className="template_container">
        <h1>Remote Desktop</h1>

        <p>
          For the workstation that needs to be remoted into, the services need
          to be activated{" "}
        </p>

        <p>
          Click the Start button on the bottom right inside the Virtual Machine
          Windows 10 Client {">"} Documents
        </p>

        <p>
          Click <b>“This PC”</b> on the left pane {">"} Right click on an empty
          space inside the window {">"} Properties
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={}
            text="Create Share"
            alt="A prompt outlining the shares that have been created along with the volume size of each drive"
          />
        </div>
      </div>
    </div>
  );
};

export default RemoteDesktop;
