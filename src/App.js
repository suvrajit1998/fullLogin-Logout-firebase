import React from "react";
import SignUp from "./components/SignUp/SignUp.component";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/Authcontext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard.component";
import Login from "./components/Login/Login.component";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.component";
import ForgotPasswrod from "./components/ForgotPassword/ForgotPassword.component";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile.component";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: 400 }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPasswrod} />
              <Route path="/update-profile" component={UpdateProfile} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
