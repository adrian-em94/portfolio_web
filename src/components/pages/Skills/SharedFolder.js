import ImageItem from "../../ImageItem";
import "../../VirtualBoxSection.css";
import ADShares from "../../../images/ADShares.png";
import ShareLocation from "../../../images/sharedlocationandpath.png";
import NewSecurityGroup from "../../../images/NewSecurityGroup.png";
import SharedFolderPath from "../../../images/SharedFolderPath.png";
import AddMember from "../../../images/AddMemberSecurityGroup.png";
import NavigateSecurity from "../../../images/NavigateToSecurity.png";
import UserAccess from "../../../images/UserAccess.png";
import ReadWrite from "../../../images/SecurityGroupReadWrite.png";
import MapAD from "../../../images/MapinAD.png";
import GreenCheck from "../../GreenCheck/GreenCheck";

const SharedFolder = () => {
  return (
    <div className="bg_white">
      <div className="template_container">
        <h1>
          Mapping Shared Folder with Security Group
          <br /> in Active Directory
        </h1>

        <h3>Creating Shared Folder</h3>

        <p>
          Open Server Manager {">"} File and Storage Services {">"} Shares
        </p>

        <p>
          Right Click white space under shares and choose <b>"New Share..."</b>
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={ADShares}
            text="Create Share"
            alt="A prompt outlining the shares that have been created along with the volume size of each drive"
          />
        </div>

        <p>
          For <b>"Select the profile for this share"</b> page click{" "}
          <b>"Next"</b>
        </p>

        <p>Select server and path</p>

        <p>
          Choose the server that you would like to apply the shared folder to
          and below it choose the path or location then click <b>"Next"</b>
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={ShareLocation}
            text="Choose Server and Path"
            alt="A prompt that asks the user to choose the server and path that the shared folder should be applied to"
          />
        </div>

        <p>
          Give the share folder a name and description and then click{" "}
          <b>"Next"</b>
        </p>

        <p>
          For <b>"Configure share settings"</b> you can add encryption and
          access-based properties as optional and then click <b>"Next"</b>
        </p>

        <p>
          For <b>"Permissions"</b> page, choose the users that you would like to
          have access to the shared folder and then click <b>"Next"</b> and{" "}
          <b>"Create"</b>
        </p>

        <h3>Creating Security Group</h3>
        <p>
          Go to Active Directory Users and Computers
          <br />
          Inside the domain {">"} Right click <b>"Users"</b> folder {">"} New{" "}
          {">"} Group
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={NewSecurityGroup}
            text="Create New Group"
            alt="A prompt that illustrates the steps outline above"
          />
        </div>

        <p>
          Give the group a name and make sure that the gropu type is{" "}
          <b>"Security"</b>, then click <b>"OK</b>
        </p>

        <p>
          For added assistance, navigate to the newly created shared folder and
          right click it {">"} Properties {">"} Sharing {">"} Copy the Network
          Path{" "}
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={SharedFolderPath}
            text="Get Network Path"
            alt="A prompt that illustrates where the Network Path can be found for the shared folder"
          />
        </div>

        <h3>Add Members to Security Group</h3>

        <p>
          Now in Active Directory Users and Computers {">"} double click the
          newly created security group
        </p>

        <p>
          Go to the <b>"Members"</b> tab {">"} Click <b>"Add"</b> {">"} Type the
          name of the User, then click <b>"OK"</b>
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={AddMember}
            text="Add Member"
            alt="A prompt that illustrates how the user can add members"
          />
        </div>

        <h3>Adjust User Access to Folder</h3>

        <p>
          Navigate to Shared Folder {">"} Right click it to <b>"Properties"</b>
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={NavigateSecurity}
            text="Users that can access the folder"
            alt="A prompt that illustrates what users can access the shared folder"
          />
        </div>

        <p>
          Go to the <b>"Security"</b> tab {">"} Advanced {">"} Disable
          Inheritance {">"} Convert inherited permissions...
        </p>

        <p>
          Then remove users to give access only to system, administrators, and
          users in the security group
        </p>

        <p>
          Add member that was added to the security group and new security group
          also by clicking <b>"Add"</b> {">"}
        </p>

        <p>
          Select a principal {">"} Type User name then click <b>"OK"</b> Click
          the <b>"Modify"</b> checkbox and click <b>"OK"</b> {">"} Then repeat
          for Security Group
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={UserAccess}
            text="Users that can access the folder"
            alt="A prompt that illustrates what users can access the shared folder"
          />
        </div>

        <p>
          Then go to the <b>"Sharing"</b> tab {">"} Click <b>"Share..."</b>{" "}
          {">"} Choose the security group and permission level drop
          <br />
          down options {">"} Choose Read/Write {">"} Then click <b>"Share"</b>{" "}
          {">"} Done{" "}
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={ReadWrite}
            text="Users permission level for file sharing"
            alt="A prompt that illustrates what users can access the shared folder"
          />
        </div>

        <h3>Map Shared Folder in Active Directory</h3>
        <p>Go to Active Directory Users and Computers</p>

        <p>
          Go to the Users folder inside the domain and choose the user you want
          to map a folder to and double click
        </p>

        <p>
          Go to the <b>"Profile</b> tab {">"} Inside Home folder {">"} In the
          Connect section choose a folder drive letter and add a path
        </p>

        <p>
          In this case we will be choosing the network path from the shared
          folder and add <i>\%username%</i> {">"} Then click <b>"OK"</b>
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={MapAD}
            text="Map folder to user"
            alt="A prompt that helps the user map a folder to a user"
          />
        </div>

        <GreenCheck />
      </div>
    </div>
  );
};

export default SharedFolder;
