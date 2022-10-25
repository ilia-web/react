import {Container, Row, Col} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Image from '../image/Image'
import Cards from '../cards/cards'
import {useState} from "react"
import Footer from '../footer/footer'
import ReactPlayer from 'react-player'

const Box = () =>{
    const [url] = useState('https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2018/11/avengers-infinity-war-netflix-big.jpg')  
    
    return (
        <main>
            <section>
                <Container>
                    <row>
                        <Col className='title-box' sm={12}>
                            <Container>
                                <Row>
                                    <Col className="image-box" sm={5}>
                                        <Image
                                            width = {400}
                                            height = {300}
                                            src = {url} 
                                            alt = "img url" 
                                        />
                                    </Col>
                                    <Col sm={5}>
                                        <div className="info-box">
                                            <div className="info__title-box">
                                                <p>AVANGERS</p>
                                                <span>                                               
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                                                   
                                                </span>
                                            </div>                      
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </row>
                </Container>
                </section>
                    <Container>
                        <row>
                            <div className="film__box">
                                <div className="film-box__title">
                                    <span>Movies</span>
                                </div>
                                <div className="film-box__card">
                                    <Cards />
                                    <Cards />
                                    <Cards />
                                </div>
                                <div className="video-box">
                                    <div className="video-box__title">
                                        <span>Now showing at cinemas</span>
                                    </div>
                                    <ReactPlayer controls url={'https://www.youtube.com/watch?v=Go8nTmfrQd8'}/>
                                </div>
                            </div>
                        </row>
                    </Container>
                <section>
                
                    <Footer />
                </section>
        </main>
    )
}


export default Box;
