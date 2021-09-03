import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentEdit from './pages/ApartmentEdit'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentShow from './pages/ApartmentShow'
import NotFound from './pages/NotFound'

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component { 
  constructor (props){
    super(props)
    this.state ={
      apartments : []
    }
  }
  componentDidMount() {
    this.ApartmentIndex()
  }
  ApartmentIndex = () => {
    fetch("http://localhost:3000/apartments")
    .then(response => { 
      return response.json()
    })
    .then(apartmentsArray => {
      this.setState({ apartments: apartmentsArray })
    })
    .catch(errors => {console.log("index errors:", errors)
        })
      }
    
    createApartment = (NewApartment) => { 
      fetch("http://localhost:3000/apartments")
      .then(response => { 
        return response.json()
      })
      .then(apartmentsArray => {
        this.setState({ apartments: apartmentsArray })
      })
      .catch(errors => {console.log("index errors:", errors)
    })
 }
    updateApartment = (EditApartment)
  
  render() { 
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <Router>
        <Header
          logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}
        />
        <Switch>
        <Route path="/Home" component={Home}/>
          <Route path="/ApartmentIndex" component={ApartmentIndex}/>
          <Route path="/ApartmentNew" component={ApartmentNew}/>
          <Route path="/ApartmentEdit" component={ApartmentEdit}/>
          <Route path="/ApartmentShow" component={ApartmentShow}/>
          <Route path="/Header" component={Header}/>
          <Route path="/Footer" component={Footer}/>
          <Route path="/NotFound" component={NotFound}/>
        </Switch>
      </Router>
    )
  }
}
export default App
