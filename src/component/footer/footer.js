import {Card} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function Footer() {
  return (
    <Card className="text-center foot-top">
      <Card.Header>MOVIE</Card.Header>
      <Card.Body>
        <Card.Title>ALL MOVIES HERE</Card.Title>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default Footer;