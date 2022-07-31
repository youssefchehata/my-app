import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';




type ContainerProps = {
  children: React.ReactNode;
  // isOpen: boolean;
  //   setIsOpen: (boolean) => void;
};
  const App : React.FC<ContainerProps> =({children})=>{
  return (
 <>
 <Header/>
{children}
<Footer/>
 </>
  );
}

export default App;
{/* <>
<Header />
<main className='py-3'>
<div className="content ">
{children}
</div>
</main>

<Footer />
</> */}


// <div className="App">
// {/* <h1>test</h1> */}
//  {children}
// {/* <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.tsx</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header> */}
// </div>
