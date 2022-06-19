import { useEffect, useState } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { LogoutUser } from "../../services/logoutuser"
import { deleteUser, selectUserLoggedIn } from "../../store/slices/userSlice"

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
      const isUserLoggedIn = useSelector(selectUserLoggedIn)
      const dispatch = useDispatch()
      const navigate = useNavigate()
      const handleLogout = async () => {
        await LogoutUser()
        dispatch(deleteUser())
        navigate('/')   
      }
    return (
        <Navbar fixed='top' expand="lg" bg={isTransparent ? undefined : 'dark'}>
        <Container>
          <Navbar.Brand as={Link} to="/" className='text-white'>ECO Transporte</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {isUserLoggedIn ? (
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link onClick={handleLogout} >Sair</Nav.Link>
            </Nav>
            ) : (
            <Nav.Link className="d-none">Home</Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }