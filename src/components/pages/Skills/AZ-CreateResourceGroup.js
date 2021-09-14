import "../../VirtualBoxSection.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CreateResourceGroupPortal from "../../CreateResourceGroup_Portal";
import CreateResourceGroupCLI from "../../CreateResourceGroup_CLI";

const AZ_CreateResourceGroup = () => {
  return (
    <div className="bg_white">
      <div className="template_container">
        <h1>Microsoft Azure - Create Resource Group</h1>
        <Tabs selectedTabClassName="bg-black">
          <TabList className="testing">
            <Tab className="test">Portal</Tab>
            <Tab className="test">CLI</Tab>
          </TabList>

          <TabPanel>
            <CreateResourceGroupPortal />
          </TabPanel>

          <TabPanel>
            <CreateResourceGroupCLI />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AZ_CreateResourceGroup;
