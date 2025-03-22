import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCharacters = createAsyncThunk(
  "getCharacters",
  async ({
    page,
    name,
    filters,
  }: {
    page?: number;
    name?: string;
    filters?: {
      gender: string;
      species: string;
      status: string;
    };
  }) => {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${name}&species=${filters?.species}&status=${filters?.status}&gender=${filters?.gender}`
    );
    return data.results;
  }
);
