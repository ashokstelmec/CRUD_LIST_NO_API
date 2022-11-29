import { useState } from "react";
import BioItem from "./components/BioItem";
import "./App.css";

const bioData = [
  { id: 0, name: "Ashok", age: 26 },
  { id: 1, name: "Sah", age: 27 },
  { id: 2, name: "Developer", age: 28 },
  { id: 3, name: "React", age: 29 },
];

function App() {

  const [biolist, setBiolist] = useState(bioData);

  const handleEdit = (item) => {
    const updateItem = item;

    const updateBios = biolist.map((q) => {
      if (q.id === updateItem.id) {
        return updateItem;
      }
      return q;
    });

    setBiolist(updateBios);
  };

  const handleClick = () => {
    setBiolist([]);
  };

  const handleRemove = (id) => {
    const newArray = biolist.filter((el) => {
      return el.id !== id;
    });

    setBiolist(newArray);
  };

  return (
    <div className="App">
      {biolist.map((el, i) => (
        <BioItem
          key={i}
          name={el.name}
          age={el.age}
          id={el.id}
          handleDelete={handleRemove}
          handleEdit={handleEdit}
        />
      ))}
      
      <button className="clear-btn" onClick={handleClick}>
        Clear the Data
      </button>
    </div>
  );
}

export default App;
