import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PokemonImages from "pokemon-images";
import { getPokemons } from "../services/pokemonService";
const state = {
  isLoading: false,
  pokemonList: [],
  error: "",
};

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async () => {
    const { data } = await getPokemons();

    const pokemonFavourites = [
      "https://pokeapi.co/api/v2/pokemon/2/",
      "https://pokeapi.co/api/v2/pokemon/4/",
      "https://pokeapi.co/api/v2/pokemon/6/",
    ];

    return data.results.map((pokemon) => ({
      ...pokemon,
      image: PokemonImages.getSprite(pokemon.name),
      favourite: pokemonFavourites.find((element) => element === pokemon.url),
    }));
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: state,
  reducers: {
    addFavourite: (state, action) => {
      state.pokemonList.filter((p, index) => {
        if (p.name === action.payload) {
          state.pokemonList[index].favourite = true;
        }
      });
    },
    removeFavourite: (state, action) => {
      state.pokemonList.filter((p, index) => {
        if (p.name === action.payload) {
          state.pokemonList[index].favourite = false;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state, action) => {
        state.isLoading = true;
        state.pokemonList = [];
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pokemonList = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.isLoading = false;
        state.pokemonList = [];
        state.error = "Something went wrong";
      });
  },
});
export const { addFavourite, removeFavourite } = pokemonSlice.actions;
export const selectState = (state) => state.pokemon.pokemonList;
export default pokemonSlice.reducer;
