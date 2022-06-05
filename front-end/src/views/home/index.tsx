import styled from "styled-components"
import Logo  from "../../assetes/img/mundo-home.png"
import { CustomButton } from "../../components/custombutton"
import { Layout } from "../../components/layout"
import { Footer } from "../../components/layout/footer"

export function Home () {
    return (
    <main>
      <div className="d-flex justify-content-center flex-column" >
        <img src={Logo} alt='mundo' width="258px" height='254px'className="align-self-center mt-4"/>
        <div className="bg-success mt-5 mb-1 ms-5 me-5 fw-bold">
          <Ppad className="mt-5 text-white bold mb-5 h2">THINK CLEAN.<br/>RIDE TOGETHER.</Ppad>
        </div>
      </div>
      <div className="bg-dark mt-3 mb-3 ms-5 me-5">
          <p className="text-white bold text-center ps-0">AND SAVE THE PLANET.</p>
      </div>
      <div className="d-flex justify-content-center gap-3">
        <CustomButton loading size='lg' variant="success" to="/login">ENTRAR</CustomButton>
        <CustomButton size='lg' variant="success" to="/register">CRIAR CONTA</CustomButton>
      </div>
      <Footer />
    </main>    
    )
}

const Ppad = styled.div`
text-align: center;
vertical-align: middle;
`