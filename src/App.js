import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Card, CardDeck } from "react-bootstrap";
import "./pages/Styles.css";

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
