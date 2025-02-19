import { useEffect } from "react"

export default function useAuth() {
    useEffect(() => {
        fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ 'grant_type': 'client_credentials', 'client_id': 'CPRa0ej3khz9IXFqMYQDjXI0MWCtz4aO', 'client_secret': 'hl7ApAlWffZK7IgZ' })
        }).then((res) =>
          res.json()).then((res) => {
            localStorage.setItem('token', res.access_token)
          })
      }, [])
}