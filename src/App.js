import React from 'react';
import Header from './components/Header';
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./components/Styles.css"
import Pagination from "./components/Pagination"


function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Pagination />
      <Footer />
    </React.Fragment >
  );
}

export default App;
