import Nav from "react-bootstrap/Nav";
import { Outlet } from "react-router-dom";

function SideNav() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
      {/* it allows subroutes render their content */}
      <Outlet />
    </Nav>
  );
}

export default SideNav;
