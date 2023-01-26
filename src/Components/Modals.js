import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Modals() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <h1>Code</h1>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <h1>Code1</h1>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <h1>Code2</h1>
      </Tab>
    </Tabs>
  );
}

export default Modals;
