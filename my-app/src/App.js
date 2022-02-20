import "./App.css";
import Card1 from "./components/Card/Card";
import man from "./man.png";
import woman from "./woman.png";
import Home from "./components/Home/Home";
import Card2 from "./components/Card2/Card2";

function App() {
  return (
    <Home>
      <div className="outside-cards">
        <Card2
          cardColor="blue"
          titleText="To Do"
          titleColor="white"
          icon="ToDo"
        >
          <Card1 person={man} genre="Label" status="To-Do">
            Christmas Banners
          </Card1>
          <Card1 person={man} genre="Label" status="To-Do">
            Redo Portfolio
          </Card1>
        </Card2>
        <Card2
          cardColor="brown"
          titleText="In Progress"
          titleColor="white"
          icon="InProgress"
        >
          <Card1 person={woman} genre="Always" status="In-Progress">
            Coffee Break
          </Card1>
          <Card1 person={woman} genre="Webflow" status="In-Progress">
            Updating Portfolio
          </Card1>
        </Card2>
        <Card2
          cardColor="purple"
          titleText="Review"
          titleColor="white"
          icon="Review"
        >
          <Card1 person={man} genre="Realease" status="Review">
            Realease to Figma Community
          </Card1>
          <Card1 person={man} genre="Feedback" status="Review">
            User Feedback
          </Card1>
          <Card1 person={man} genre="Sourcing" status="Review">
            Background images from{" "}
            <a href="https://www.google.com.br">humaaans.com</a>
          </Card1>
        </Card2>
        <Card2
          cardColor="green"
          titleText="Done"
          titleColor="black"
          icon="Done"
        >
          <Card1 person={woman} genre="UI" status="Done">
            Style Guide
          </Card1>
          <Card1 person={woman} genre="UI" status="Done">
            Component Library
          </Card1>
          <Card1 person={woman} genre="UI" status="Done">
            Sticker Components
          </Card1>
        </Card2>
      </div>
    </Home>
  );
}

export default App;
