import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount((prevData) => {
      return prevData + 1;
    });
  }
  console.log("component rendered");
  React.useEffect(function () {
    console.log("useEffect rendered");
  });

  return (
    <div className="App">
      <Container>
        <Card>
          <h3 className="header">The Count is : {count} </h3>
          <Button onClick={handleClick}>COUNT</Button>
        </Card>
      </Container>
    </div>
  );
}

export default App;
