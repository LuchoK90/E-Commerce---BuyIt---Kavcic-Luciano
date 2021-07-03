import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ItemCard = ({ data }) => {
	return (
		<div className='ItemCard'>
			<Card style={{ width: 300, height: 300 }}>
				<Image style={{ width: 300 }} src={data.img} wrapped ui={false} />
				<Card.Content>
					<Card.Header>{data.name}</Card.Header>
					<Card.Meta>
						<span>PRECIO: $ {data.price}</span>
					</Card.Meta>
					
				</Card.Content>
			</Card>
		</div>
	);
};

export default ItemCard;