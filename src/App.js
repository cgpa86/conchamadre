//feature-1

import React  from 'react';
import data from "./data.json";
import Products from './components/Products';



import {Grid, IconButton} from '@material-ui/core';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';


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
        <a href="/"> CONCHA MADRE ® | </a>

  
        <Grid item  >
                    <IconButton >
                        <InstagramIcon />
                        <a href="https://www.instagram.com/conchamadre.conchasrellenas/" target="_blank" rel="noopener noreferrer">
                          Ig
                        </a>
                    </IconButton>                   
                        <IconButton >
                         <FacebookIcon />
                         <a href="https://www.facebook.com/Concha-Madre-107028984348629/" target="_blank" rel="noopener noreferrer">
                          Fb
                            </a>
                         </IconButton>                
                </Grid>

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
          
      Concha Madre®  última actualización Dic 2020 | by PACG
      </footer>
    </div>
  );
  }
}

export default App;
