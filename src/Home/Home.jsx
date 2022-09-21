import "../components/Todo.scss";
import { useState } from "react";
import { nanoid } from "nanoid";
import TodoList from "../components/TodoList";
import Search from "../components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "20,09,2022",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "20,09,2022",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "20,09,2022",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="home-page">
      <Search handleSearchNote={setSearchText} />
      <TodoList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
