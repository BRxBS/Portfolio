import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { Header } from "./components/header";

export function App() {

  return (
    <>
              <Header/>
              <Router />
    </>
  )
}
