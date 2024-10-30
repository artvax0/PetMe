import ThemeContextProvider from "./providers/ThemeProvider"
import { BrowserRouter } from "react-router-dom"
import Router from "./routes/Router"




function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <Router />
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
