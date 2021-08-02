import React from 'react'
import VMName from '../images/NameVirtualMachine.png'
import VMMemorySize from '../images/MemorySize.png'
import VMHardDisk from '../images/HardDisk.png'
import VMHardDiskType from '../images/HardDisk_Type.png'
import VMDynamicHard from '../images/Dynamic_HardDisk.png'
import VMHardSize from '../images/HardDisk_Size.png'
import IsoLocation from '../images/SelectISO.png'
import '../components/VirtualBoxSection.css'
import ImageItem from './ImageItem'
import Option2 from '../images/Option2.png'


const addingInfo = (heading, text, ImageObject, ImageSrc, ImageText, ImageAlt) => {
    return (
        <div>
            <h4>{heading}</h4>
            <p>{text}</p>
            <div className='image_with_caption'>
                <ImageItem src={ImageSrc} text={ImageText} alt={ImageAlt}/>
            </div> 
        </div>
    )
}


function VirtualBoxSection() {
    return (
        <div className="bg_white">
            <div className='template_container'>
                <h1>Creating a Windows 10 Virtual Machine w/ Virtual Box</h1>
                
                <h4>Download the Windows media creation tool</h4>
                
                <p>The Windows media creation tool can be found on the microsoft website 
                    and is necessary to download the iso file for the virtual machine
                </p>
                
                <h4>Get the iso from the media creation tool</h4>
                
                <p>Once the media creation tool has been downloaded locate the iso file
                    for Windows 10
                </p>
                
                <h4>Download & Install Oracle's Virtual Box</h4>
                
                <p>Virtual Box can be found for free on the Oracle website</p>
                
                <h4>Open Virtual Box and click New</h4>

                <p>The next screen will prompt the user to name the virtual machine
                    and choosing the destination along with the operating system and version.
                </p>

                <div className='image_with_caption'>
                    <ImageItem
                        src={VMName}
                        text="Name the Virtual Machine"
                        alt='A prompt askign the user to name the virtual machine and choose the destiantion and version'
                    />
                </div>
                
                <h4>Choosing memory size</h4>

                <div className='image_with_caption'>
                    <ImageItem
                        src={VMMemorySize}
                        text="Choose desired memory size"
                        alt='A prompt asking the user to choose the memory size for the virtual machine'
                    />
                </div>
                
                <p>Click radio button "<strong>Create a virtual hard disk now</strong>"</p>

                <div className='image_with_caption'>
                    <ImageItem
                        src={VMHardDisk}
                        text="Hard Disk option"
                        alt='A prompt asking the user to create a hard disk or use an existing one'
                    />
                </div>

                <p>Choose the desired hard disk file type</p>

                <div className='image_with_caption'>
                    <ImageItem
                        src={VMHardDiskType}
                        text="Hard Disk file type"
                        alt='A prompt asking the user to choose between VDI, VHD, and VMDK hard disk file types'
                    />
                </div>
                
                <p>Choose the way you want the storage size to be handled</p>
                
                <div className='image_with_caption'>
                    <ImageItem
                        src={VMDynamicHard}
                        text="Dynamic or Fixed Hard Disk"
                        alt='A prompt asking the user to choose between a fixed or dynamically fixed hard disk'
                    />
                </div>
                
                <h4>Choose the file location and size</h4>
                
                <div className='image_with_caption'>
                    <ImageItem
                        src={VMHardSize}
                        text="VM Hard Disk file location"
                        alt='A prompt asking the user to select the hard disk size and location'
                    />
                </div>

                <p>Click Create</p>

                <h4>Now to start the virtual machine</h4>

                <p>Highlight the virtual machine in VirtualBox 
                    <br />Click start on the newly created virtual machine</p>

                <h4>Select the iso location</h4>
                <h4>Option 1:</h4>

                <p>After hitting the start button a prompt should appear to choose the location of the iso.
                    <br />If it doesnt, go to option 2.
                    <br />Navigate to the ISO file
                </p>

                <div className='image_with_caption'>
                    <ImageItem
                        src={IsoLocation}
                        text="Locate the Windows 10 iso"
                        alt='A prompt that asks the user select the location of the iso file'
                    />
                </div>

                <h4>Option 2:</h4>

                <p>Highlight the virtual machine in virtual box
                <br />Click Settings {">"} Storage
                </p>
                
                <div className='image_with_caption'>
                    <ImageItem
                        src={Option2}
                        text="Virtual Box VM Settings"
                        alt='Virtal Box Settings'
                    />
                </div>

                <p>
                    <br />Highlight the Empty Disk
                    <br />Then Click the disk to the right of 'Optical Drive'
                    <br />Navigate to the ISO file then click OK
                </p>

                <h4>Now to start the virtual machine</h4>

                <p>Highlight the virtual machine in VirtualBox 
                    <br />Click start on the newly created virtual machine</p>
                
                <h4>Windows Setup</h4>
                <p>Accept the license terms and go through the regular windows setup to complete
                    and use the virtual machine for Windows 10
                </p>

            </div>
        </div>
    )
}

export default VirtualBoxSection;

