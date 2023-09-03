// export const Navbar = (props) => {
//   let name = <h2>James</h2>;
//   return (
//     <div>
//       <h1 style={{ fontSize: "3rem", color: "blue" }}>My Navbar</h1>
//       <div>hi {name}</div>
//     </div>
//   );
// };

// export default Navbar;

import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link>
          <Link to="/">Home</Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        {/* <Nav.Link eventKey="link-1">About Us</Nav.Link> */}
        <Nav.Link>
          <Link to="contactus">Contact Us</Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        {/* <Nav.Link eventKey="link-2">Contact Us</Nav.Link> */}
        <Nav.Link>
          <Link to="aboutus">About Us</Link>
        </Nav.Link>
      </Nav.Item>
      {/* <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item> */}

      <Nav.Item>
        {/* <Nav.Link eventKey="link-2">Contact Us</Nav.Link> */}
        <Nav.Link>
          <Link to="cards">Cards</Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        {/* <Nav.Link eventKey="link-2">Contact Us</Nav.Link> */}
        <Nav.Link>
          <Link to="usered">UseReducer</Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        {/* <Nav.Link eventKey="link-2">Contact Us</Nav.Link> */}
        <Nav.Link>
          <Link to="context">UseContext</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
