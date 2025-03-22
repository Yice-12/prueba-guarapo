import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCharacterById = createAsyncThunk(
  "getCharacterById",
  async (idCharacter?: string) => {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${idCharacter}`
    );
    return data;
  }
);
