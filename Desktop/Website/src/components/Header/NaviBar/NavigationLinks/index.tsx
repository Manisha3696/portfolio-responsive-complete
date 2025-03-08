import type React from "react"
import { Nav, NavDropdown } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const NavigationLinks: React.FC<{ activeLink: string }> = ({ activeLink }) => {
  const navigate = useNavigate()

  return (
    <Nav className="mx-auto">
      <Nav.Link onClick={() => navigate("/")} active={activeLink === ""}>
        Home
      </Nav.Link>
      <Nav.Link onClick={() => navigate("/products")} active={activeLink === "products"}>
        About Us
      </Nav.Link>
      {/* <Nav.Link onClick={() => navigate("/products")} active={activeLink === "products"}>
        Certificates
      </Nav.Link> */}
      {/* <Nav.Link
        active={activeLink.startsWith("product") && activeLink !== "products"}
      >
        Product Detail
      </Nav.Link> */}
      <Nav.Link onClick={() => navigate("/shop")} active={activeLink === "shop"}>
        Certificates
      </Nav.Link>
      {/* <Nav.Link onClick={() => navigate("/shop-detail")} active={activeLink === "shop-detail"}>
        Shop Detail
      </Nav.Link> */}
      <NavDropdown title="Product" id="basic-nav-dropdown">
        <NavDropdown.Item onClick={() => navigate("/cart")}>
          Rice
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate("/spices")}>
          Spices
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate("/Snacks")}>
          Snacks
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate("/vegetables")}>
        Vegetables
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate("/checkout")}>
          Pooja Product
        </NavDropdown.Item>
        
        <NavDropdown.Item onClick={() => navigate("/404")}>
         Flower
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link onClick={() => navigate("/contact")} active={activeLink === "contact"}>
        Contact Us
      </Nav.Link>
    </Nav>
  )
}

export default NavigationLinks
