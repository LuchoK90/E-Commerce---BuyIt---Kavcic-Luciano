import React, { useState, useEffect } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import axios from 'axios';
import './ItemList.css';
//LINK ROUTER DOM
import { Link } from 'react-router-dom';


function ItemList(props) {
	const [Items, setItems] = useState([]);

	useEffect(() => {
		axios('https://mocki.io/v1/740910b1-6479-4d5e-b03a-37167322aea0').then((res) => {
			// console.log(res.data);
			setItems(res.data);
		});
	}, []);
	
	return (
		<div className='ItemList-container'>
			{Items.filter(item => item.cathegory==props.categoria).map((item) => { 
				// console.log('id', char.char_id);
				return (
					<div key={item.id} className='ItemCard-Container'>
						<Link to={`/detalle/${item.id}`}>
							<ItemCard data={item} />
						</Link>
						
					</div>
				);
			})}
		</div>
	);
}

export default ItemList;
