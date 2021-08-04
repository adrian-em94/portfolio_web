import '../VirtualBoxSection.css'
import ImageItem from '../ImageItem'
import TCP from '../../images/tcp-ipv4.png'
import StaticIP from '../../images/changeStaticIP.png'

const Lab = () => {
    return (
        <div className="bg_white">
            <div className='template_container'>
                <h1>Create a Lab Environment
                    <br />VirtualBox Windows Server 2016 on MAC
                </h1>

                <p>Open Control Panel {'>'} View Network Status and Tasks {'>'} Change adapter settings
                    <br />Right click on Ethernet {'>'} Properties {'>'} double click TCP IPv4</p>
                <div className='image_with_caption'>
                    <ImageItem
                        src={TCP}
                        text="TCP/IPv4"
                        alt='A prompt showing the user their network options and configurations'
                    />
                </div>

                <p>Now you must add a private IP address and default gateway alog with the private DNS Server
                    <br />See the image below for an example
                </p>
                <div className='image_with_caption'>
                    <ImageItem
                        src={StaticIP}
                        text="Change Static IP"
                        alt='A prompt giving the user the option to obtain IP address automatically or manually'
                    />
                </div>
            </div>
        </div>
    )
}

export default Lab