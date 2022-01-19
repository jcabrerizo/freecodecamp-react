import StarImg from "../img/star.png"
import WomanImg from "../img/woman.png"
import { CardModel } from "../react-app-env"
/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card({points, nationality}:CardModel) {
  return (
    <div className="card">
      <img src={WomanImg} />
      <div className="card--stats">
        <img src={StarImg} />
        <span>{points}</span>
        <span className="card--gray">(6) - </span>
        <span className="card--gray">{nationality}</span>
        <div>Lorem ipsum dolor</div>
        <div>Lorem ipsum dolor sit</div>
      </div>
    </div>
  )
}