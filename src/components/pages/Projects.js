import ARProjSection from '../Projects/ARProjSection'
import PortfolioSection from '../Projects/PortfolioSection'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../Projects/Projects.css'

const Projects = () => {
    return (
        <div className='outer_container'>
            <div className='inner_container'>
               <Tabs selectedTabClassName="bg-black">
                <TabList className='testing'>
                <Tab className="test">ARTIC App</Tab>
                <Tab className="test">Portfolio Website</Tab>
                </TabList>

                <TabPanel>
                    <ARProjSection />
                </TabPanel>
                <TabPanel>
                    <PortfolioSection />
                </TabPanel>
                </Tabs>  
             </div>
             
        </div>  
    )
}

export default Projects;