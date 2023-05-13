import React from "react";
import fetchAllData from "../services/api";
import { useState, useEffect } from "react";
import { getNotes, getNoteById, createNote } from "../services/notes/notesApi";
import Notes from "../components/notes/Note";

function handleCreateNote() {
  //for now its hardcoded to check is the post fucntion works
  const note = {
    title: "bar stupid",
    content: "i know you laugh right now",
  };
  createNote(note);
}

export default function MainPage() {
  return (
    <div>
      <Notes></Notes>
    </div>
  );
}

//   const [notes, setNotes] = useState([]);
//   useEffect(() => {
//     //get all notes while components
//     async function fetchNotes() {
//       const notesData = await getNotes();
//       setNotes(notesData);
//     }
//     fetchNotes();
//   }, []);
