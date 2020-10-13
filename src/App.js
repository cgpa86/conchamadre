//feature-1

import React from 'react';
import data from "./data.json";
import Products from './components/Products';

class App extends React.Component {
constructor(){
  super();
  this.state = {
    products: data.products,
    tamanos:"",
    sort:"",
  };
}

  render(){ 
  return (
    <div className="grid-container">
      <header >
        <a href="/"> CONCHA MADRE </a>

        
      </header>   
      <main>
        <div className="content">
          <div className="main">
              <Products products={this.state.products}>

              </Products>
          </div>
     

        </div>
        </main>
      <footer>
        Concha Madre® Todos los Derechos Reservados. realizado por p.a.c.g
      </footer>
    </div>
  );
  }
}

export default App;
