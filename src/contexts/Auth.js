import { useContext, createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'))

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  const signUp = (data) => {
    console.log(data)
  }

  const signIn = async (data) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/authenticate`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
      })
      const { token } = await response.json()
      setToken(token)
    } catch (error) {
      console.log(error)
    }
  }

  const signOut = () => localStorage.removeItem('token')

  const value = {
    signUp,
    signIn,
    signOut,
    token,
  }

  return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
}