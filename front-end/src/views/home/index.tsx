import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import styled from "styled-components";

export function Home () {
    return (
    <div>
      <Tittle onClick={() => toast.success('oi')}>oi</Tittle>
    </div>
    )
}

const Tittle = styled(Button)`
  font-size: 1rem;
`