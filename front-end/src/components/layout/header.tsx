import { useEffect, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
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
        <NavBarStyled fixed='top' expand="lg" className="">
        <Container>
          <Navbar.Brand as={Link} to="/" className='text-white'>ECO Taxi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {isUserLoggedIn ? (
            <Nav className="ms-auto ">
              <Nav.Link onClick={handleLogout} className='text-white'>Sair</Nav.Link>
            </Nav>
            ) : (
            <Nav.Link className="d-none">Home</Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </NavBarStyled>
    )
  }

  const NavBarStyled = styled(Navbar)`
    background-color: #000;
  `