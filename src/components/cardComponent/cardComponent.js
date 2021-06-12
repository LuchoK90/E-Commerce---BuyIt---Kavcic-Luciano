import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const cardComponent = (props) => (
  <Card style={{margin:0, marginLeft:10}}>
    <Image src={props.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.date}</span>
      </Card.Meta>
      <Card.Description>
      {props.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card>
)

export default cardComponent