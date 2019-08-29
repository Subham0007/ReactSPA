import React from 'react';
import {Route ,Link,Switch} from 'react-router-dom'

import {Home} from './Home'
import {Customers} from './Customers'
import {Login} from './Login'
import Cars from './Cars'
import {CarDetails} from './CarDetails'
import {Greet} from './Greet'

export const Layout = () => (  
  <div>
    <nav class="navbar navbar-inverse " className="nav">
    <ul  class="nav  nav-pills nav-fill justify-content-cente">
        <li class="nav-item"><Link className="nav"  exact to='/'>Home</Link></li>
        <li class="nav-item"><Link className="nav"  exact to='/users'>Customers</Link></li>
        <li class="nav-item"><Link className="nav"  exact to='/cars'>Cars</Link></li>
        <li class="nav-item"><Link className="nav"  exact to='/login'>Login</Link></li>    
        <li class="nav-item"><Link className="nav" exact to="/greet/Murthy">Greet</Link></li>
      </ul>
        </nav>

    <main className="container">
      <Switch>
      <Route path="/" exact component={Home} />     
      <Route path="/users" component={Customers}  />
      <Route path="/login" component={Login} />
      <Route path="/cars" component={Cars} />
      <Route path="/carDetails/:carId" component={CarDetails}/>    
      <Route path='/greet/:username' 
            render={(props) => (<Greet {...props} />)}/>
      <Route component={NotFound}/>
     </Switch>
      </main>
  </div>
)
const NotFound= () => <h1>Sorry... there is no matching route</h1>


