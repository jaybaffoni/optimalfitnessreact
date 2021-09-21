import './App.css';
import * as React from "react";
import {BrowserRouter, Switch, Route, useLocation} from "react-router-dom";
import {HeaderBar} from "./components/header-bar";
import {HomeScreen} from "./screens/home-screen";
import {LexingtonScreen} from "./screens/lexington-screen";
import {BeachhouseScreen} from "./screens/beachhouse-screen";
import {CorporateScreen} from "./screens/corporate-screen";
import {QuinScreen} from "./screens/quin-screen";
import {InhomeScreen} from "./screens/inhome-screen";
import {StaffScreen} from "./screens/staff-screen";
import {AboutScreen} from "./screens/about-screen";
import {TrainingScreen} from "./screens/training-screen";
import {ContactScreen} from "./screens/contact-screen";
import {Footer} from "./components/footer";
import {useEffect} from "react";
import {Snackbar} from "./components/snackbar";

function App() {

    const { pathname, hash } = useLocation();

    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === '') {
            window.scrollTo(0, 0);
        }
        // else scroll to id
        else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }, 0);
        }
    }, [pathname]);

  return (
    <div className="App">
        <HeaderBar />
        {/*<ScrollToTop />*/}
        <Switch>
            <Route exact path="/">
                <HomeScreen />
            </Route>
            <Route path="/home">
                <HomeScreen />
            </Route>
            <Route path="/about">
                <AboutScreen />
            </Route>
            <Route path="/lexington">
                <LexingtonScreen />
            </Route>
            <Route path="/beachhouse">
                <BeachhouseScreen />
            </Route>
            <Route path="/corporate">
                <CorporateScreen />
            </Route>
            <Route path="/quin">
                <QuinScreen />
            </Route>
            <Route path="/inhome">
                <InhomeScreen />
            </Route>
            <Route path="/training">
                <TrainingScreen />
            </Route>
            <Route path="/staff">
                <StaffScreen />
            </Route>
            <Route path="/contact">
                <ContactScreen />
            </Route>
        </Switch>
        <Footer />
        <Snackbar />
    </div>
  );
}

export default App;
