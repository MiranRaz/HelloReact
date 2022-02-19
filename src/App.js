import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import ToDo from "./components/ToDo";

function App() {
  return (
    <div>
      <h1>My To-Dos!</h1>
      <ToDo text="Learn React" />
      <ToDo text="Master React" />
      <ToDo text="Arula" />
      <Modal/>
      <Backdrop/>
    </div>
  );
}

export default App;
