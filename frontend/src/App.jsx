import ThemeContextProvider from "./providers/ThemeProvider"
import { BrowserRouter } from "react-router-dom"
import Router from "./routes/Router"
import Layout from "./components/layout/Layout"




function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <Layout>
            <Router />
          </Layout>
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
