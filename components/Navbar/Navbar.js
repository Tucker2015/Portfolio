import { Button, Navbar, NavDropdown, Nav, Form, FormControl } from 'react-bootstrap';

export default function Navigation() {

    return (
        <Navbar bg="dark" variant="dark" expand="lg" >
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/logo.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
      React Bootstrap
    </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" activeKey="/home">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/services">Services</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>

                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )

}