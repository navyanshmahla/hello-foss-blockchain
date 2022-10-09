import Dropdown from 'react-bootstrap/Dropdown';
import {useState} from 'react';


function BasicExample() {
    const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select TIME-CAPSULE
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Safe</Dropdown.Item>
        <Dropdown.Item href="#/action-2"onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Big Day {isHovering && <h2>Coming soon!</h2>}</Dropdown.Item>
        <Dropdown.Item href="#/action-3"onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Countdown {isHovering && <h2>Coming soon!</h2>}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;