import { useEffect, useState } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

type Props = {
    startTransparent?: boolean
}

export function Header ({startTransparent = false}: Props) {
    const [isTransparent, setIsTransparent] = useState(startTransparent)
    useEffect(() => {
        const scrollChange = () => {
          const isLowScroll = window.scrollY < 100
          if (startTransparent && isLowScroll !== isTransparent) {
            setIsTransparent(isLowScroll)
          }
        }
        window.addEventListener('scroll', scrollChange)
        return () => {
          window.removeEventListener('scroll', scrollChange)
        }
      }, [isTransparent, startTransparent])
    return (
        <Navbar fixed='top' expand="lg" bg={isTransparent ? undefined : 'dark'}>
        <Container>
          <Navbar.Brand as={Link} to="/" className='text-white'>ECO Transporte</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }