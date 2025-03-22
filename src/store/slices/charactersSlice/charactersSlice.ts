import { createSlice } from "@reduxjs/toolkit";
import { getCharacters } from "./actions/getCharacters";
import { Character, Characters } from "../../../types/characters";
import { getCharacterById } from "./actions/getCharacterById";
import { getEpisodes } from "./actions/getEpisodes";

const initialState: Characters = {
  loading: false,
  characters: [],
  character: {} as Character,
  episodes: [],
  name: "",
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    resetCharacters: (state) => {
      state.characters = [];
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = [...state.characters, ...action.payload];
      })
      .addCase(getCharacterById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCharacterById.fulfilled, (state, action) => {
        state.loading = false;
        state.character = action.payload;
      })
      .addCase(getEpisodes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEpisodes.fulfilled, (state, action) => {
        state.loading = false;
        state.episodes = action.payload;
      });
  },
});

export const { resetCharacters, setName } = charactersSlice.actions;
