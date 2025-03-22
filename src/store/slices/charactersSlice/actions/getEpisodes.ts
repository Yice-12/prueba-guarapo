import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getEpisodes = createAsyncThunk(
  "getEpisodes",
  async (episodes: Array<string>) => {
    const responses = episodes.map(async (episode) => {
      const { data } = await axios.get(episode);
      return data;
    });

    const response = await Promise.all(responses);
    return response;
  }
);
