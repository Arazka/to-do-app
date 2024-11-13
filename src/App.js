import { useState } from "react";

function App() {
  const [items, setItems] = useState([]); // array untuk menampung data
  const [input, setInput] = useState(""); // untuk menghandel perubahan pada inputan

  // function handel perubahan pada inputan
  function handleInputChange(e) {
    setInput(e.target.value);
  }

  // handel submit atau menambahkan data
  function handleSubmit(e) {
    e.preventDefault();

    if (!input.trim()) {
      return;
    }

    const newInput = {
      id: new Date().getTime(),
      text: input,
    };

    setItems((items) => [...items, newInput]);
    setInput("");
  }

  // function untuk menghapus item
  function handleDelete(id) {
    const confirm = window.confirm("Are you sure delete this item?");

    if (confirm) {
      // menghapus data menggunakan function filter yang dimana akan melakukan filter data dengan id yang tidak sama dengan id yang diterima oleh parameter
      const updateItem = items.filter((item) => item.id !== id);
      setItems(updateItem);
      // setItems((items) => items.filter((item) => item.id !== id));
    }
  }

  return (
    <div className="App">
      <h1>Notes</h1>
      <form className="note-input" onSubmit={handleSubmit}>
        <input type="text" placeholder="add text..." value={input} onChange={handleInputChange} />
        <button>Add</button>
      </form>
      {/* <span>{input}</span> */}
      {items.length > 0 ? (
        <ul className="note-list">
          {items.map((item) => (
            <li key={item.id}>
              {item.text} <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Data kosong broo....</p>
      )}
    </div>
  );
}

export default App;
