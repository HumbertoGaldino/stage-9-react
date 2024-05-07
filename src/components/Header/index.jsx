import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://avatars.githubusercontent.com/u/62859615?v=4"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Humberto Galdino</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}