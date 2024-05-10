import React from 'react';

import "./style2.css";

import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import  Container from 'react-bootstrap/Container';

import Card  from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

import { Badge } from 'react-bootstrap';

import { Rating } from '@mui/material';







export default function Amazon() {
          
      const obj=[
        {img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEWNkZTRr1kPAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC",
        title:"Fancy Product",
        price:"$40.00 - $80.00",
        button:"view options",
        sale:0,
        star:0
        },

        {
            img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEWNkZTRr1kPAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC",
        title:"Special Item",
        price:"$20.00 $18.00",
        button:"Add to cart",
        sale:1,
        star:1
        },
        {
            img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEWNkZTRr1kPAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC",
        title:"Sale Item",
        price:"$40.00 - $80.00",
        button:"Add to cart",
        sale:1,
        star:0
        
        },
        {
            img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEWNkZTRr1kPAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC",
        title:"Popular Item",
        price:"$40.00 - $80.00",
        button:"Add to cart",
        sale:0,
        star:1
        }
      ];

      

 



        function Cont(){
            

            

                let samp=obj.map((x)=>{
                        
                     function change(){
                        
                      if(x.sale==1){
                    const badge = <Badge  bg="dark" style={{position:'absolute',top:"10px",right:"10px"}}>sale</Badge>
                  
                       return badge
                      }
                     }

                     function change1(){


                      if(x.star==1){
                            
                             const rating=<Rating name="size-medium" defaultValue={5} style={{display:"flex",textAlign:"center",paddingLeft:"58px"}} />

                              return rating
                      }
                     }


                 
                    return(
                        <div class="container" >
                      
                       <div class="card" >
                       
                          {change()}
                          <img  class="card-img-top"   src={x.img} />
                                <div class="card-body">
                                         <h3 class="card-title">{x.title}</h3>
                                              <p class="card-text">
                                                   {x.price}
                                                   </p>
                                                   {change1()}
                                                   <Button variant="outline-dark" >{x.button}</Button>
                                                  
                                       
                                  </div>
                        </div>                     
                    
                     </div>
                     )
                 }
                 
                    )
           return(samp )
           
        }


  return (
   <div>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
    <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
        
        <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Popular Items</NavDropdown.Item>
             
              <NavDropdown.Item href="#action/3.3">New Arrival</NavDropdown.Item>
            </NavDropdown>
                
                <Button className="nav-lis" variant='outline-dark'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>Cart</Button>
           

      

        </Container>
    </Navbar>
      
     <header class="head">
        <h1 class="mx-auto">Shop In Style</h1>
        <h4 className='sub-title'>with this shop homepage template</h4>
    </header>
   

    <div className='cards'>
         
        {Cont()}
       
    </div>
    <div className='cards'>
         
        {Cont()}
       
    </div>
    </div>
  )
}
