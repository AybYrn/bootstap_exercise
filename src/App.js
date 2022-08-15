import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  const [starWars, setStarWars] = React.useState({});

  function handleClick() {
    setCount((prevData) => {
      return prevData + 1;
    });
  }
  console.log("component rendered");
  React.useEffect(
    function () {
      fetch(`https://swapi.dev/api/people/${count}`)
        .then((res) => res.json())
        .then((data) => setStarWars(data));
    },
    [count]
  );

  return (
    <div className="App">
      <Container>
        <Card>
          <h3 className="header">The Count is : {count} </h3>
          <Button onClick={handleClick}>COUNT</Button>
          <p>{JSON.stringify(starWars, null, 2)}</p>
        </Card>
      </Container>
    </div>
  );
}

export default App;
