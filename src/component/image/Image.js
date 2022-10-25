import {useState} from "react"

const Image = () => {
    const [url] = useState('https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2018/11/avengers-infinity-war-netflix-big.jpg')  
    return (
        <div>
            <img
            width = {400}
            height = {300}
            src = {url} 
            alt = "img url"
            />
        </div>
    )
}

export default Image;