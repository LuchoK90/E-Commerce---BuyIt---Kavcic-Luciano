import React, { useEffect, useState } from 'react';
import { Card, Image } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';
import Header from './components/header/header.js';
import NavBar from './components/navBar/navBar.js';
import ItemCount from './components/itemCount/itemCount.js';

function Detalle({ match }) {
	// console.log('MATCH', match);
	let ID = match.params.id;
    

	const [item, setItem] = useState([]);

	useEffect(() => {
		axios(`https://mocki.io/v1/740910b1-6479-4d5e-b03a-37167322aea0`).then((res) =>
			// console.log(res.data)
			setItem(res.data)
		);
	}, [ID]);

	return (
        
		<div>
        <Header />
        <NavBar />
        <p className="Title" style={{fontSize:'38px'}}>DETALLE</p>
			{item.filter(item => item.id==ID).map((item) => {
				return (
					<Card key={item.id}>
						<Image src={item.img} wrapped ui={false} />
						<Card.Content>
							<Card.Header>{item.name}</Card.Header>
							<Card.Meta>
								<span>PRECIO: $ {item.price}</span>
							</Card.Meta>
                            {item.detalle}
						</Card.Content>
                        <ItemCount/>
					</Card>
				);
			})}
		</div>
	);
}

export default Detalle;
