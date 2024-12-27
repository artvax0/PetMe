import ThemeContextProvider from "./providers/ThemeProvider"
import { BrowserRouter } from "react-router-dom"
import Router from "./routes/Router"
import Layout from "./components/layout/Layout"
import UserContextProvider from "./providers/UserProvider"
import SnackbarProvider from "./providers/SnackbarProvider"

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <SnackbarProvider>
            <UserContextProvider>
              <Layout>
                <Router />
              </Layout>
            </UserContextProvider>
          </SnackbarProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App