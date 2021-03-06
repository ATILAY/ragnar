import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Dashboard from "./Dashboard/Dashboard"
import Todos from "./Todos/Todos"

import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

function App() {
  // const user = useAuthState(auth)

  return (
    <>
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute exact path="/todos" component={Todos} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
    </>
  )
}

export default App
//pdstdoxxsnkdsmfvhl@kiabws.com
//qweqwe
//firebase deploy --only firestore:rules // auth-todo-83419 auth-todo-83419
//i can check on https://console.firebase.google.com/project/auth-dev-1ed67/firestore/rules?consoleUI=FIREBASE
//on firestore database section from left 
//"npm --prefix $Env:RESOURCE_DIR run lint"
//https://stackoverflow.com/questions/48345315/error-deploying-with-firebase-on-npm-prefix-resource-dir-run-lint
