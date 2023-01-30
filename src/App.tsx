import { client } from "./lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { Header } from "./components/header";

export function App() {

  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
            <Header/>
            <Router />
    </BrowserRouter>
    </ApolloProvider>
  )
}
