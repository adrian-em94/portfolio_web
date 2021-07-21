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

function VirtualBoxSection() {
    return (
        <div className="bg_white">
            <div className='vb_container'>
                <h1>Creating a Windows 10 Virtual Machine w/ Virtual Box</h1>
                
                <h2>Download the Windows media creation tool</h2>
                
                <p>The Windows media creation tool can be found on the microsoft website 
                    and is necessary to download the iso file for the virtual machine
                </p>
                
                <h2>Get the iso from the media creation tool</h2>
                
                <p>Once the media creation tool has been downloaded locate the iso file
                    for Windows 10
                </p>
                
                <h2>Download & Install Oracle's Virtual Box</h2>
                
                <p>Virtual Box can be found for free on the Oracle website</p>
                
                <h2>Open Virtual Box and click New</h2>

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
                
                <h2>Choosing memory size</h2>

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
                
                <h2>Choose the file location and size</h2>
                
                <div className='image_with_caption'>
                    <ImageItem
                        src={VMHardSize}
                        text="VM Hard Disk file location"
                        alt='A prompt asking the user to select the hard disk size and location'
                    />
                </div>

                <p>Click Create</p>

                <h2>Now to start the virtual machine</h2>

                <p>Click start on the newly created virtual machine</p>

                <h2>Select the iso location</h2>

                <div className='image_with_caption'>
                    <ImageItem
                        src={IsoLocation}
                        text="Locate the Windows 10 iso"
                        alt='A prompt that asks the user select the location of the iso file'
                    />
                </div>
                
                <p>Accept the license terms and go through the regular windows setup to complete
                    and use the virtual machine for Windows 10
                </p>

            </div>
        </div>
    )
}

export default VirtualBoxSection;

