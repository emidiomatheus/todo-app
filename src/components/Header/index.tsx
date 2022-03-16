import { FiLogOut } from 'react-icons/fi';
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div className="container">
        <img src='/images/logo-light.svg' alt="Logo To.do" height="30px" />
        <div className="profile">
          <span>Olá, Matheus</span>
          <FiLogOut color="#505050" aria-label="Sair" title="Sair" />
        </div>
      </div>
    </Container>
  )
}