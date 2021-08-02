import React from 'react'
import '../VirtualBoxSection.css'
import ImageItem from '../ImageItem'
import ADDS from '../../images/addRoles_andFeatures.png'
import InstallationType from '../../images/InstallationType.png'
import DestinationServer from '../../images/destination_server.png'
import ADDSServerRole from '../../images/ActiveDirectory_domainservices.png'

const ActiveDirectory = () => {
    return (
        <div className="bg_white">
            <div className='template_container'>
                <h1>Installing Active Directory Domain Services 
                    <br />On Windows Server 2016</h1>
                
                <p>Open Server Manager {'>'} Go to <strong>"Manage"</strong> {'>'} Add Roles and Features
                <br />Hit Next</p>
                
                <div className='image_with_caption'>
                    <ImageItem
                        src={ADDS}
                        text="Server Manager"
                        alt='Server Manager UI that has the add roles and features highlighted under the Manage menu item'
                    />
                </div>

                <h4>Installation Type</h4>
                <p>Click <strong>"Role-based or Feature-based installation" </strong>
                <br />Then hit <strong>"Next"</strong></p>

                <div className='image_with_caption'>
                    <ImageItem
                        src={InstallationType}
                        text="Installation Type"
                        alt='Prompt that is asking the user to choose between role based installation or remote desktop services installation'
                    />
                </div>

                <h4>Destination Server</h4>
                <p>Choose the server that you would like to add Active Directory Domain Services to
                    <br />Then hit <strong>"Next"</strong></p>
                <div className='image_with_caption'>
                    <ImageItem
                        src={DestinationServer}
                        text="Destination Server"
                        alt='Prompt that is asking the user to choose the a server that will have the features installed'
                    />
                </div>

                <h4>Server Roles</h4>
                <p>Highlight <strong>"Active Directory Domain Services</strong>
                    <br />Hit <strong>"Next"</strong></p>
                <div className='image_with_caption'>
                    <ImageItem
                        src={ADDSServerRole}
                        text="Server Roles"
                        alt='Prompt that is asking the user to choose the server roles that would like to be added'
                    />
                </div>

            </div>
        </div>
    )
}

export default ActiveDirectory
