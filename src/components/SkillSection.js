import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import VBox from "../images/virtualbox-icon.svg";
import ADPic from "../images/microsoftad-logo.svg";
import AddUser from "../images/AddUser.png";
import WindowsServer from "../images/windows-server.svg";
import sharedDrive from "../images/shared-drive.jpg";
import RDP from "../images/rdp.png";

const SkillSection = () => {
  return (
    <div className="cards">
      <h1>Skills</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={VBox}
              text="Virtual Box - Virtual Machine"
              label="Virtualization"
              path="/VirtualBox"
            />
            <CardItem
              src={ADPic}
              text="Active Directory Domain Services"
              label="AD"
              path="/ActiveDirectory"
            />
            <CardItem
              src={AddUser}
              text="Active Directory Account Creation"
              label="Add User"
              path="/ADAccountCreation"
            />
          </ul>
        </div>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={WindowsServer}
              text="Lab Environment w/ VirtualBox Windows Server"
              label="Lab"
              path="/Lab"
            />
            <CardItem
              src={sharedDrive}
              text="Mapping Shared Folder"
              label="Shared Folder"
              path="/SharedFolder"
            />
            <CardItem
              src={RDP}
              text="Remote Desktop"
              label="RDP"
              path="/Remote"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
