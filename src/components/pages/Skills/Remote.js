import "../../VirtualBoxSection.css";
import ImageItem from "../../ImageItem";
import ComputerProperties from "../../../images/ComputerProperties.png";
import RDSettings from "../../../images/RemoteDesktopSettings.png";
import RDUsers from "../../../images/RemoteDesktopUsers.png";
import { Accordion } from "react-bootstrap";
import RDC from "../../../images/RDC.png";
import RDCSuccess from "../../../images/success.png";
import CDollar from "../../../images/C$.png";
import CResults from "../../../images/C$Results.png";
import GreenCheck from "../../GreenCheck/GreenCheck";

const Remote = () => {
  return (
    <div className="bg_white">
      <div className="template_container">
        <h1>Remote Desktop</h1>
        <h3>Setup</h3>
        <p>
          For the workstation that is being remoted into to work properly, the
          remote services need to be activated first.
        </p>

        <p>
          Click the Start button on the bottom right inside the Virtual Machine
          Windows 10 client {">"} Documents
        </p>
        <p>
          Click <b>"This PC"</b> on the left pane {">"} Right click on an empty
          space inside the windows {">"} Properties
        </p>
        <div className="image_with_caption">
          <ImageItem
            src={ComputerProperties}
            text="Properties"
            alt="A prompt showing the user where to navigate to find the remote desktop settings"
          />
        </div>
        <p>
          Click <b>"Remote Settings"</b> on the left pane
        </p>
        <p>
          <b>Note:</b> admin rights are necessary from this domain to make
          changes
        </p>
        <p>
          In the Remote Desktop section, choose{" "}
          <b>"Allow remote connections to this computer"</b>
        </p>
        <p>
          Then click <b>"Select Users..."</b>
        </p>
        <div className="image_with_caption">
          <ImageItem
            src={RDSettings}
            text="Allowing remote connections"
            alt="A prompt that asks the user to configure remote desktop settings and users"
          />
        </div>
        <p>
          Now click <b>"Add"</b> and select the users that you would like to
          have remote access to this workstation
        </p>
        <p>
          Then click <b>"OK"</b> {">"} <b>"OK"</b>
        </p>
        <div className="image_with_caption">
          <ImageItem
            src={RDUsers}
            text="Allowing users to connect remotely"
            alt="A prompt that asks the user to choose which users to allow remote connection to workstation"
          />
        </div>
        <p>Now this account can be accessed remotely.</p>

        <div className="accordion">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Option 1: Remote Desktop Connection
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Now from a different workstaiton but on the same domain...
                </p>

                <p>
                  Go to <b>"Remote Desktop Connection"</b> {">"} Type the name
                  of the computer {">"} Click <b>"Connect"</b>
                </p>
                <div className="image_with_caption">
                  <ImageItem
                    src={RDC}
                    text="Remote Desktop Connection"
                    alt="A prompt that asks the user to input a computer name to RDP to"
                  />
                </div>
                <p>
                  <b>Note:</b> You'll most likely need Admin rights to enter and
                  you will disconnect the other user.
                </p>
                <p>
                  <b>Success:</b> Take note of the top bar on the screen
                  displaying the computer name that is being remoted into
                </p>
                <div className="image_with_caption">
                  <ImageItem
                    src={RDCSuccess}
                    text="Successfull connection"
                    alt="A prompt that shows the user a successfull remote connection"
                  />
                </div>
                <GreenCheck />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Option 2: C$</Accordion.Header>
              <Accordion.Body>
                <p>
                  Another way to remote in and see the files of the user is to
                  use C$
                </p>
                <p>
                  <b>Note:</b> When using this method, the user doing so much
                  have admin rights
                </p>
                <p>
                  In the File Explorer {">"} type <b>"\\(ComputerName)\C$</b>
                </p>
                <div className="image_with_caption">
                  <ImageItem
                    src={CDollar}
                    text="Remote using C$"
                    alt="A prompt that shows the user how to remote using C$"
                  />
                </div>
                <p>Success</p>
                <div className="image_with_caption">
                  <ImageItem
                    src={CResults}
                    text="Results using C$"
                    alt="A prompt that shows the user how to remote using C$"
                  />
                </div>
                <GreenCheck />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Remote;
