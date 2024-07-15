import React from 'react';
import Header from './Component/Header/Header';
import ContactForm from './Component/ContectForm/ContectForm';
import ContactList from './Component/ContectList/ContectList';



const App = () => {
  return (
 
      <div className="app">
        <Header />
        <ContactForm />
        <ContactList />
      </div>

  );
};

export default App;
