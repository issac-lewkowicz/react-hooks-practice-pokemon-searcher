import {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({hp,id,name,sprites}) {
  const {front, back} = sprites;
  const [sprite, setSprite] = useState(front)
  const handleClick = () => setSprite(sprite.includes('back')? front : back)
  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={sprite} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
