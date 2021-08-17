import React from "react";
import VMName from "../images/NameVirtualMachine.png";
import VMMemorySize from "../images/MemorySize.png";
import VMHardDisk from "../images/HardDisk.png";
import VMHardDiskType from "../images/HardDisk_Type.png";
import VMDynamicHard from "../images/Dynamic_HardDisk.png";
import VMHardSize from "../images/HardDisk_Size.png";
import IsoLocation from "../images/SelectISO.png";
import "../components/VirtualBoxSection.css";
import ImageItem from "./ImageItem";
import Option2 from "../images/Option2.png";
import GreenCheck from "./GreenCheck/GreenCheck";
import Accordion from "react-bootstrap/Accordion";

const addingInfo = (heading, text, ImageSrc, ImageText, ImageAlt) => {
  return (
    <>
      <h3>{heading}</h3>
      <p>{text}</p>
      <div className="image_with_caption">
        <ImageItem src={ImageSrc} text={ImageText} alt={ImageAlt} />
      </div>
    </>
  );
};

const VirtualBoxSection = () => {
  const InitialSetup = addingInfo(
    "Open Virtual Box and click New",
    "The next screen will prompt the user to name the virtual machine" +
      "and choose the destination along with the operating system and version",
    VMName,
    "Name the Virtual Machine",
    "A prompt askign the user to name the virtual machine and choose the destiantion and version"
  );

  const MemorySize = addingInfo(
    "Choosing memory size",
    "It is recommended to choose at least 4 GB of memory size",
    VMMemorySize,
    "Choose desired memory size",
    "A prompt asking the user to choose the memory size for the virtual machine"
  );

  const HDDFileType = addingInfo(
    "Hard Disk File Type",
    "Choose the desired hard disk file type",
    VMHardDiskType,
    "Hard Disk file type",
    "A prompt asking the user to choose between VDI, VHD, and VMDK hard disk file types"
  );

  const HDDFileSize = addingInfo(
    "Hard Disk File Location & Size",
    "Choose the desired location and size. It is recommmended to have a minimum of 16 GB for Windows. Then click 'Create'",
    VMHardSize,
    "VM Hard Disk file location",
    "A prompt asking the user to choose between a fixed or dynamically fixed hard disk"
  );
  return (
    <div className="bg_white">
      <div className="template_container">
        <h1>Creating a Windows 10 Virtual Machine w/ Virtual Box</h1>

        <h3>Download the Windows media creation tool</h3>

        <p>
          The Windows media creation tool can be found on the microsoft website
          and is necessary to download the iso file for the virtual machine
        </p>

        <h3>Get the iso from the media creation tool</h3>

        <p>
          Once the media creation tool has been downloaded locate the iso file
          for Windows 10
        </p>

        <h3>Download & Install Oracle's Virtual Box</h3>

        <p>Virtual Box can be found for free on the Oracle website</p>

        {InitialSetup}
        {MemorySize}

        <p>
          Click radio button "<strong>Create a virtual hard disk now</strong>"
        </p>

        <div className="image_with_caption">
          <ImageItem
            src={VMHardDisk}
            text="Hard Disk option"
            alt="A prompt asking the user to create a hard disk or use an existing one"
          />
        </div>

        {HDDFileType}

        <p>Choose the way you want the storage size to be handled</p>

        <div className="image_with_caption">
          <ImageItem
            src={VMDynamicHard}
            text="Dynamic or Fixed Hard Disk"
            alt="A prompt asking the user to choose between a fixed or dynamically fixed hard disk"
          />
        </div>

        {HDDFileSize}

        <h3>Now to start the virtual machine</h3>

        <p>Highlight the virtual machine in VirtualBox</p>

        <p>Click start on the newly created virtual machine</p>

        <h3>Select the iso location</h3>

        <div className="accordion">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Option #1</Accordion.Header>
              <Accordion.Body>
                <p>
                  After hitting the start button a prompt should appear to
                  choose the location of the iso. If it doesnt, go to option 2.
                </p>

                <p>Navigate to the ISO file</p>
                <div className="image_with_caption">
                  <ImageItem
                    src={IsoLocation}
                    text="Locate the Windows 10 iso"
                    alt="A prompt that asks the user select the location of the iso file"
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Option #2</Accordion.Header>
              <Accordion.Body>
                <p>Highlight the virtual machine in virtual box</p>

                <p>Click Settings {">"} Storage</p>

                <div className="image_with_caption">
                  <ImageItem
                    src={Option2}
                    text="Virtual Box VM Settings"
                    alt="Virtal Box Settings"
                  />
                </div>

                <p>Highlight the Empty Disk</p>

                <p>
                  Then Click the disk to the right of <b>"Optical Drive"</b>
                </p>

                <p>
                  Navigate to the ISO file then click <b>"OK"</b>
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <h3>Now to start the virtual machine</h3>

        <p>Highlight the virtual machine in VirtualBox</p>

        <p>Click start on the newly created virtual machine</p>

        <h3>Windows Setup</h3>
        <p>
          Accept the license terms and go through the regular windows setup to
          complete and use the virtual machine for Windows 10
        </p>

        <GreenCheck />
      </div>
    </div>
  );
};

export default VirtualBoxSection;
