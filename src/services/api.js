import React from "react";
import { apiUrl, apiVersion } from "../settings";

//generic funtions for api http requests

export default async function fetchAllData(path) {
  let response = null;
  try {
    const response = await fetch(`${apiUrl}/${path}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

export async function fetchById(path, id) {
  const response = await fetch(`${apiUrl}/${path}${id}`);
  const data = await response.json();
  return data;
}

export const postData = async (path, data) => {
  try {
    const response = await fetch(`${apiUrl}/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("There was an error!", error);
  }
};

export function updateData(note_id) {
  return null;
}

export function deleteData() {
  return null;
}
