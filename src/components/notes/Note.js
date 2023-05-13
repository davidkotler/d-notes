import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import "../css/Note.css";
import { getNotes } from "../../services/notes/notesApi";

function Note({ note }) {
  return (
    <div className="note">
      <div className="note__body">
        <h2 className="note__title">{note.title}</h2>
        <p className="note__content">{note.content}</p>
      </div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        <DeleteForeverOutlinedIcon
          className="note__delete"
          aria-hidden="true"
        ></DeleteForeverOutlinedIcon>
      </div>
    </div>
  );
}
const [notes, setNotes] = useState([]);
useEffect(() => {
  //get all notes while components
  async function fetchNotes() {
    const notesData = await getNotes();
    setNotes(notesData);
  }
  fetchNotes();
}, []);

function Notes({ notes }) {
  return (
    <div className="notes">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}

export default Notes;
