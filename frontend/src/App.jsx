import ThemeContextProvider from "./providers/ThemeProvider"
import { BrowserRouter } from "react-router-dom"
import Router from "./routes/Router"
import Layout from "./components/layout/Layout"
import UserContextProvider from "./providers/UserProvider"




function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <UserContextProvider>
            <Layout>
              <Router />
            </Layout>
          </UserContextProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
