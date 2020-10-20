import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import './components/bootstrap.min.css';
import Container from './components/Container';
import './components/custom.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container />
      <Footer />
    </div>
  );
}

export default App;

/*
Components : 
1 / Div navbar + div links
2/  Container "articles"
3 / Div archive + authors + tagscd
4 / Articles ( )
5 / Avatars
6 / Tags
7 / Footer

1 / h1 + navbar + <a>$
2 / <section>
3 / div +  <a>
4 / Img + une div + un h2 + sous titre + tags + paragraphe + un avatar
5 / image
6 / div
7 / Div + <a>

*/