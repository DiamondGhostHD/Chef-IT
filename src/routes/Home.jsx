import React from 'react';
import ReactDOM from 'react-dom';
import '/src/styles/index.css';
import '/src/styles/Home.css';

function Home() {
  return (
    <div className='viewport'>
      <div className='splash'>
        <img src='/src/assets/background.svg' alt='Background' />
      </div>
      <div className='logo-dark'>
        <img src='/src/assets/logo-dark.svg' alt='Logo-dark' />
      </div>
      <div className='top-rated'>
        <img src='/src/assets/top-rated.svg' alt='Top-rated' />
        <div className='top-rated-text'>Top rated recipes</div>
      </div>
      <div className='contact-us'>
        <img src='/src/assets/contact-us.svg' alt='Contact-us' />
      </div>
      <div className='wave-bar'>
        <img src='/src/assets/wave-bar.svg' alt='Wave-bar' />
      </div>
    </div>
  );
}

export default Home;