import "../../VirtualBoxSection.css";

const AZ_CustomDomain = () => {
  return (
    <div className="bg_white">
      <div className="template_container">
        <h1>Microsoft Azure - Add Custom Domain</h1>
        <p>
          To add a custom domain to the Azure active directory, you must first
          have already bought and own a domain. For this example, I used GoDaddy
          to purchase a domain and continue the lab.
        </p>

        <p>Inside the Azure portal {">"} Azure Active Directory</p>

        <p>
          On the left panel, under “<b>Manage</b>” {">"} Custom domain names{" "}
          {">"} Add custom domain
        </p>
      </div>
    </div>
  );
};

export default AZ_CustomDomain;
