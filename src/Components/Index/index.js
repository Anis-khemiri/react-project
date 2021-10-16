import React , { Component } from 'react';




import Home from './../Home'
import About from './../About'

import Footer from './../Footer'

import Portfolio from './../Portfolio'
import Profil from './../Profil'
import SocialMedia from './../SocialMedia'
import Work from './../Work'




class Index extends Component {
  render() {
    return (
      <div>
   
      <Home />
      <Work />
      <Portfolio />
      <Profil />
      <About />
      <SocialMedia />
      <Footer />

      </div>
    )
  }
}
  
export default Index;
