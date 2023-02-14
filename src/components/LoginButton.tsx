import { useAuth0 } from '@auth0/auth0-react'

export function LoginButton() {
  const { loginWithRedirect } = useAuth0()

  function handleLogout() {
    loginWithRedirect()
  }

  return <button onClick={handleLogout}>Entrar</button>
}
