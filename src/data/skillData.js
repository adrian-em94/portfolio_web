import VBox from "../images/virtualbox-icon.svg";
import ADPic from "../images/microsoftad-logo.svg";
import AddUser from "../images/AddUser.png";
import WindowsServer from "../images/windows-server.svg";
import sharedDrive from "../images/shared-drive.jpg";
import RDP from "../images/rdp.png";
import Azure from "../images/Azure.png";

const data = [
  {
    id: 1,
    src: VBox,
    text: "Virtual Box - Virtual Machine",
    label: "Virtualization",
    path: "/VirtualBox",
    tag: "Virtual_Machine",
  },
  {
    id: 2,
    src: ADPic,
    text: "Active Directory Domain Services",
    label: "AD",
    path: "/ActiveDirectory",
    tag: "Active_Directory",
  },
  {
    id: 3,
    src: AddUser,
    text: "Active Directory Account Creation",
    label: "Add User",
    path: "/ADAccountCreation",
    tag: "Active_Directory",
  },
  {
    id: 4,
    src: WindowsServer,
    text: "Lab Environment w/ VirtualBox Windows Server",
    label: "Lab",
    path: "/Lab",
    tag: "Virtual_Machine",
  },
  {
    id: 5,
    src: sharedDrive,
    text: "Mapping Shared Folder",
    label: "Shared Folder",
    path: "/SharedFolder",
    tag: "Active_Directory",
  },
  {
    id: 6,
    src: RDP,
    text: "Remote Desktop",
    label: "RDP",
    path: "/Remote",
    tag: "Remote",
  },
  {
    id: 7,
    src: Azure,
    text: "Azure - Add Custom Domain",
    label: "Azure",
    path: "/AZ_CustomDomain",
    tag: "Microsoft_Azure",
  },
];

export default data;
