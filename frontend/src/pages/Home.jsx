import React from 'react';
import './styles.css'
import FillButton from '../components/TestButtons/FillButton.jsx'
import LineButton from '../components/TestButtons/LineButton.jsx';

const Home = () => {
  return (
    <section className="container">
      <h2>Server '25</h2>

      <div className="jumbo">
        <h3>Jumbo</h3>
      </div>



    {/* <article className="login">
        <h3>Acces</h3>
        <p>Please access to your account.</p>

    <FillButton legend="login" url={`http://localhost:3030/users/login`} />
    
    <LineButton legend="register"  url={`http://localhost:3030/users/register`} />

    </article> */}

    </section>
  );
};

export default Home;
