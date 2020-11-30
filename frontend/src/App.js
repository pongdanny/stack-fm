import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage/LoginForm";
import SignupFormPage from "./components/SignupFormPage/SignUpForm";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import NavBody from "./components/Navigation/NavBody";
// import { useSelector } from "react-redux";
import Song from "./components/songComp/Song";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import ContactPage from "./components/ContactPage/ContactPage";
// watch out, the line of code above this comment constantly gives errors every now and then, its SUPER ANNOYING AND IDK WHY but its working now

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/songs">
            <Song />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <NavBody></NavBody>
        </Switch>
      )}
    </>
  );
}

export default App;
