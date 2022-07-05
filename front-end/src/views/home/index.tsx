import { useSelector } from "react-redux"
import styled from "styled-components"
import Logo  from "../../assetes/img/mudanca-climatica.jpg"
import { CustomButton } from "../../components/custombutton"
import { Footer } from "../../components/layout/footer"
import { selectUserLoggedIn } from "../../store/slices/userSlice"
import terraviva from "../../assetes/img/terraviva.jpg"
import terramorta from "../../assetes/img/poluicao.jpg"
import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"

type Props = {
  worldAnimation?: boolean  
  getvaluedarkmode: string
}

export function Home ({worldAnimation = true}: Props) { 
  const getvaluedarklight = JSON.parse(localStorage.getItem('value') || '{}')

  const [isdarkmode, setDarkmode] = useState(() => {
    const initialState = !getvaluedarklight;
    return initialState;
  });

  const buttonHandler = () => {
    setDarkmode(!isdarkmode)
    localStorage.setItem('value', JSON.stringify(isdarkmode))
  }

    const [isWorldAnimation, setWorldAnimation] = useState(worldAnimation)
    useEffect(() => {
        const scrollChange = () => {
          const isLowScroll = window.scrollY < 100
          if (worldAnimation && isLowScroll !== isWorldAnimation) {
            setWorldAnimation(isLowScroll)
            console.log(isLowScroll)
          }
        }
        window.addEventListener('scroll', scrollChange)
        return () => {
          window.removeEventListener('scroll', scrollChange)
        }
      }, [isWorldAnimation, worldAnimation])
    const isUserLoggedIn = useSelector(selectUserLoggedIn)
    const colors =  [ {"color": "Primary", "text": "oioioioioi"},
    {"color": "Success"},
    {"color": "Secondary"},
    {"color": "info"},
    ]
    return (
    <MainStyled>
      <ContainerStyled fluid="sm" className={!getvaluedarklight ? 'bg-dark' : 'bg-white flex-1'}>
      <div className="d-flex justify-content-lg-between" >
        <DarkLightBtnStyled onClick={buttonHandler} className='bg-secondary align-itens-center text-white'>Dark/<span className="text-dark">Light</span></DarkLightBtnStyled>
        {isUserLoggedIn ? (
          <div className="d-flex justify-content-center gap-3 d-none d-lg-block">
            <CustomButton loading size='lg' variant="success" to="/novacarona"className="mt-3">Nova carona</CustomButton>   
          </div>
        ) : (
          <div className="d-flex justify-content-center gap-3 d-none d-lg-block mt-3">
            <CustomButton size='sm' variant="success" to="/login">ENTRAR</CustomButton>
            <CustomButton size='sm' className="ms-3 " variant="success" to="/signin">CRIAR CONTA</CustomButton>
          </div>
      )}
      </div>
      <div className="d-flex justify-content-center flex-column">
        <div className="bg-success mt-5 mb-1 ms-5 me-5 fw-bold">
          <Ppad className="mt-5 text-white bold mb-5 h2">ECO TAXI<br/>THINK CLEAN.<br/>RIDE TOGETHER.</Ppad>
        </div>
        <img src={Logo} alt='mundo' width="258px" height='230px'className="d-md-none align-self-center mt-4"/>
      </div>
      <div className={!getvaluedarklight ? 'bg-white mt-3 mb-3 ms-5 me-5' : 'bg-dark mt-3 mb-3 ms-5 me-5'}>
          <p className={!getvaluedarklight ? 'text-dark bold text-center ps-0' : 'text-white bold text-center ps-0'}>AND SAVE THE PLANET.</p>
      </div>
      <Imganimation className="d-none d-md-flex justify-content-center  ms-5 me-5 ss">
        <img src={terraviva} alt="terraviva" className="img-fluid m-0 " />
        <Parag className={isWorldAnimation ? 'd-none parag' : 'd-block' && 'd-md-none d-lg-block bg-secondary text-white mb-0 as'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci omnis consequuntur doloremque accusamus voluptates, nemo similique deserunt inventore! Facilis ipsum neque nisi temporibus quia ipsam accusamus dicta esse harum repudiandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum rem et autem ab eos architecto sint deleniti iure. Maiores doloremque molestiae saepe nulla vitae dignissimos officia quaerat perspiciatis numquam harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat maiores, quia quasi culpa doloribus rem vero! Hic cupiditate accusantium ullam corporis in iure quam. Vero dicta aliquid deleniti iste obcaecati!</Parag>
        <img src={terramorta}  alt="terraviva" className="img-fluid " />
      </Imganimation>
      {isUserLoggedIn ? (
        <div className="d-flex justify-content-center  d-lg-none mt-3 mb-5">
        <CustomButton  size='lg' variant="success" to="/novacarona">Nova carona</CustomButton>   
      </div>
      ) : (
      <div className="d-flex justify-content-center gap-3 d-lg-none mt-3 mb-5">
        <CustomButton size='lg' variant="success" to="/login">ENTRAR</CustomButton>
        <CustomButton size='lg' variant="success" to="/signin">CRIAR CONTA</CustomButton>
      </div>
      )}
      <Row className="d-none d-md-block">
        <Col className="d-flex flex-row gap-2 mb-3 mt-5 justify-content-center" xs={12}>
      {
        colors.map((variant) => (
        <CardStyled
          bg={variant.color.toLowerCase()}
          key={variant.color}
          text={variant.color.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className={variant.color}   
        >
          <Card.Header>Info</Card.Header>
          <Card.Body>
            <Card.Title>Saiba </Card.Title>
            <Card.Text>
              {variant.text} 
            </Card.Text>
          </Card.Body>
        </CardStyled>
  ))}
  </Col>
  </Row>
  <Row className="d-none d-md-block">
        <Col className="d-flex flex-row gap-2 mb-5 mt-0 justify-content-center" xs={12}>
      {
        colors.map((variant) => (
        <CardStyled
          bg={variant.color.toLowerCase()}
          key={variant.color}
          text={variant.color.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className={variant.color}   
        >
          <Card.Header>Info</Card.Header>
          <Card.Body>
            <Card.Title>Saiba </Card.Title>
            <Card.Text>
              {variant.text} 
            </Card.Text>
          </Card.Body>
        </CardStyled>
  ))}
  </Col>
  </Row>
      </ContainerStyled>
      <Footer withoutMargin />
    </MainStyled>    
    )
          
  }


const Ppad = styled.div`
text-align: center;
vertical-align: middle;
`
const Parag = styled.p`
 &:hover,
 &:focus {
  transform: scale(0.9);
 }
`
const Imganimation = styled.div`
   .ss {
   &:hover {
    display: block;
  }
 }
`
const MainStyled = styled.main`
  background-color: #003d21;
  display: flex;
  flex-direction: column;
`
const ContainerStyled = styled(Container)`
  flex:1;
` 
const CardStyled = styled(Card)`
  box-shadow: 5px 5px 5px #000;
    &.Primary{
    background-color: #907878 !important;
    &:hover,
    &:focus {
    transform: scale(1.2) rotate(+5deg);
    transition: transform 0.8s !important ;
    }
  }
  &.Success{
    background-color: #124128 !important;
    &:hover,
    &:focus {
    transform: scale(1.2) rotate(-5deg);
    transition: transform 0.8s !important ;
    }
  }
  &.Secondary{
    background-color: #17092a !important;
    &:hover,
    &:focus {
    transform: scale(1.2) rotate(+5deg);
    transition: transform 0.8s !important ;
    }
  }
  &.info{
    background-color: #150303 !important;
    &:hover,
    &:focus {
    transform: scale(1.2) rotate(-5deg);
    transition: transform 0.8s !important ;
    }
  }
  &:hover,
  &:focus { 
  transition: transform 0.8s;
  z-index: 10;
  transform: scale(1.2) rotate(-3deg);
  border-radius: 15px;
  box-shadow: 5px 5px 5px #000;
  }
`
const DarkLightBtnStyled = styled.button`
  height: 30px;
  background: linear-gradient(111deg, #4c4848 50%, white 50%) !important;
`
