import {Card, Button} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {useState} from "react"
const Cards= () => {

    const [url] = useState('https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png')  

    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={url} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    )
}

export default Cards;