import React from "react";
import { fetchById, postData } from "../api";
import fetchAllData from "../api";

export async function getNotes() {
  const notes = await fetchAllData("notes/");
  return notes;
}

export async function getNoteById(id) {
  const notes = await fetchById("notes/", id);
  return notes;
}

export async function createNote(data) {
  postData("notes/", data);
}
