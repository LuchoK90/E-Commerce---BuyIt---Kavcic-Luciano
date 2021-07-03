import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tecnologia from './tecnologia';
import Musica from './musica';
import Deportes from './deportes';
import Home from './home';
import Detalle from './detalle';

class App extends React.Component{

  render(){
    return <div className="App">

<Router>
		 {/*	<div className='App'>
      <Header />
      <NavBar /> */}
				<Switch>
				<Route path='/' exact component={Home} />
					<Route path='/tecnologia' component={Tecnologia} />
					<Route path='/musica' exact component={Musica} />
          <Route path='/deportes' component={Deportes} />
          <Route path='/detalle/:id' component={Detalle} />
				</Switch>
		{/*	</div> */}
		</Router>
     
    
     {/*    <img src={logo} className="App-logo" alt="logo" />
        <p className="Title" style={{fontSize:'38px'}}>
        BUY IT!
        </p> */}
       {/*  <div className="Cards">
        <CardComponent  name={"Luciano"} description={"Alumno del curso de React JS"} date={"Mayo 2021"} img={"https://react.semantic-ui.com/images/avatar/large/matthew.png"}/>
        <CardComponent  name={"Francisco"} description={"Alumno del curso de React JS"} date={"Junio 2021"} img={"https://react.semantic-ui.com/images/avatar/large/matthew.png"}/>
        <CardComponent  name={"Ricardo"} description={"Alumno del curso de React JS"} date={"Junio 2021"} img={"https://react.semantic-ui.com/images/avatar/large/matthew.png"}/>
        </div>  */}
        <br></br>  
        <p>
       {/*  {this.state.name} */}
        </p>

    {/* <Items />

        <br></br>
        <ItemCount /> <br></br> */}
    </div>
    }
}

export default App;
