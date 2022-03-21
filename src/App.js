import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Card, CardDeck } from "react-bootstrap";
import "./pages/Styles.css";
import "@fontsource/roboto"; 

const Main = lazy(() => import('./pages/Home'));
const Analysis = lazy(() => import('./pages/analysis'));
const Results = lazy(() => import('./pages/results'));
const Statistics = lazy(() => import('./pages/statistics'));
const About = lazy(() => import('./pages/about'));
const NotFound = lazy(() => import('./pages/notFound'));

function App() {
  return (
    
    <div>
     <Header />
        <Router>
          <Suspense fallback={<p>Loading ...</p>}>
            <Switch>
              <Route exact path={ ROUTES.MAIN } component={Main}/>
              <Route exact path={ ROUTES.ANALYSIS } component={Analysis}/>
              <Route exact path={ ROUTES.RESULTS } component={Results}/>
              <Route exact path={ ROUTES.STATISTICS } component={Statistics}/>
              <Route exact path={ ROUTES.ABOUT } component={About}/>
              <Route component={NotFound}/>
            </Switch>
          </Suspense>
        </Router>
    
      
      <Footer />
    </div>
  );
}

export default App;
