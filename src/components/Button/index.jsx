import { Container } from './styles'

// ...rest - todos as outras propriedades não listadas
export function Button({ title, loading = false, ...rest }) {
  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container >
  )
}