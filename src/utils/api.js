export const fetchPokemonList = async (limit = 150) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch Pokémon list');
    }
    return await response.json();
  };
  
  export const fetchPokemonDetails = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch Pokémon details');
    }
    return await response.json();
  };
  
  export const fetchAllPokemonDetails = async (limit = 150) => {
    const list = await fetchPokemonList(limit);
    const details = await Promise.all(
      list.results.map(pokemon => fetchPokemonDetails(pokemon.url))
    );
    return details;
  };