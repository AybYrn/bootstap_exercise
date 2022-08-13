import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="App">
      <Container>
        <Card>
          <h1 className="header">Welcome To React-Bootstrap</h1>
          <Button>COUNT</Button>
        </Card>
      </Container>
    </div>
  );
}

export default App;
