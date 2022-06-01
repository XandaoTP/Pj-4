import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import styled from "styled-components";

export function Home () {
    return (
    <div>
      <Tittle onClick={() => toast.success('oi')}>oi</Tittle>
      <FontAwesomeIcon icon={faFacebookMessenger} />
    </div>
    )
}

const Tittle = styled(Button)`
  font-size: 1rem;
`