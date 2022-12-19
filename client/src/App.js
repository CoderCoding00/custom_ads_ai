import React from "react";
import "./App.css";

//Import components
import LoginForm from "./components/LoginForm";
import NavTab from "./components/Navbar";
import Home from "./components/Home";
import ProductDescription from "./components/ProductDescription";
import SignUp from "./components/SignupForm";
import footerBuild from './components/footer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // authLink middleware before making the request to GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <NavTab />
          {/* <Home /> */}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route
              path="/product-description"
              element={<ProductDescription />}
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    <footerBuild />
    </ApolloProvider>
     
  );
}

export default App;
