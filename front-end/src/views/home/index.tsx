import { useSelector } from "react-redux"
import styled from "styled-components"
import Logo  from "../../assetes/img/mudanca-climatica.jpg"
import { CustomButton } from "../../components/custombutton"
import { Footer } from "../../components/layout/footer"
import { selectUserLoggedIn } from "../../store/slices/userSlice"
import terraviva from "../../assetes/img/terraviva.jpg"
import terramorta from "../../assetes/img/poluicao.jpg"
import { useEffect, useState } from "react"

type Props = {
  worldAnimation?: boolean
  darkmode: boolean
  getvaluedarkmode: string
}

export function Home ({worldAnimation = true , darkmode = true}: Props) {
    const [isdarkmode, setDarkmode] = useState(darkmode)
    const buttonHandler = () => {
      setDarkmode(darkmode => !darkmode)
      localStorage.setItem('value', JSON.stringify(isdarkmode))
    }
    const getvaluedarkmode = localStorage.getItem('value')
    const getvaluedarklight = JSON.parse(getvaluedarkmode || '{}') 
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
    return (
    <main className={!getvaluedarklight ? 'bg-dark' : 'bg-white'}>
      <div className="d-flex justify-content-lg-between" >
        <button onClick={buttonHandler} className='bg-secondary align-itens-center'>Dark/Light</button>
        {isUserLoggedIn ? (
          <div className="d-flex justify-content-center gap-3 d-none d-lg-block">
            <CustomButton loading size='lg' variant="success" to="/novacarona">Nova carona</CustomButton>   
          </div>
        ) : (
          <div className="d-flex justify-content-center gap-3 d-none d-lg-block">
            <CustomButton size='sm' variant="success" to="/login">ENTRAR</CustomButton>
            <CustomButton size='sm' className="ms-3" variant="success" to="/signin">CRIAR CONTA</CustomButton>
          </div>
      )}
      </div>
      <div className="d-flex justify-content-center flex-column">
        <div className="bg-success mt-5 mb-1 ms-5 me-5 fw-bold">
          <Ppad className="mt-5 text-white bold mb-5 h2">THINK CLEAN.<br/>RIDE TOGETHER.</Ppad>
        </div>
        <img src={Logo} alt='mundo' width="258px" height='230px'className="d-md-none align-self-center mt-4"/>
      </div>
      <div className={!getvaluedarklight ? 'bg-white mt-3 mb-3 ms-5 me-5' : 'bg-dark mt-3 mb-3 ms-5 me-5'}>
          <p className={!getvaluedarklight ? 'text-dark bold text-center ps-0' : 'text-white bold text-center ps-0'}>AND SAVE THE PLANET.</p>
      </div>
      <Imganimation className="d-none d-md-flex justify-content-center  ms-5 me-5 ss">
        <img src={terraviva} alt="terraviva" className="img-fluid m-0 " />
        <Parag className={isWorldAnimation ? 'd-none' : 'd-block' && 'd-md-none d-lg-block bg-secondary mb-0 as'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci omnis consequuntur doloremque accusamus voluptates, nemo similique deserunt inventore! Facilis ipsum neque nisi temporibus quia ipsam accusamus dicta esse harum repudiandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum rem et autem ab eos architecto sint deleniti iure. Maiores doloremque molestiae saepe nulla vitae dignissimos officia quaerat perspiciatis numquam harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat maiores, quia quasi culpa doloribus rem vero! Hic cupiditate accusantium ullam corporis in iure quam. Vero dicta aliquid deleniti iste obcaecati!</Parag>
        <img src={terramorta}  alt="terraviva" className="img-fluid " />
      </Imganimation>
      {isUserLoggedIn ? (
        <div className="d-flex justify-content-center gap-3 d-lg-none">
        <CustomButton loading size='lg' variant="success" to="/novacarona">Nova carona</CustomButton>   
      </div>
      ) : (
      <div className="d-flex justify-content-center gap-3 d-lg-none">
        <CustomButton loading size='lg' variant="success" to="/login">ENTRAR</CustomButton>
        <CustomButton size='lg' variant="success" to="/signin">CRIAR CONTA</CustomButton>
      </div>
      )}
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <Footer withoutMargin />
    </main>    
    )
}

const Ppad = styled.div`
text-align: center;
vertical-align: middle;
`
const Parag = styled.p`
 
`
const Imganimation = styled.div`
   .ss {
   &:hover {
    display: block;
  }
 }
`

