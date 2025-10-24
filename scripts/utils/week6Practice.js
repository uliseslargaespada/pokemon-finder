// Imports
import { getPokemonAPI, getAbilitiesAPI, getItemAPI } from '../services/getPokemonService.js';

// Group 1 -  Pokémon Data Fetching
// 1. Fetch and log the name and base experience of Squirtle.
const squirtleResponse = await getPokemonAPI("squirtle");
console.log("Pokemon Name: ", squirtleResponse.data.name);
console.log("Pokemon Base experience: ", squirtleResponse.data.base_experience);

// Group 2 - Miscellaneous API Calls
// 3. Fetch and log the name and effect of the first Ability.
const abilitiesResponse = await getAbilitiesAPI();
console.log("Ability Name: ", abilitiesResponse.data.results[0].name);

// Group 3: Advanced API Calls by ID
// 2. Fetch item data by ID and log the item name and category.
const itemResponse = await getItemAPI(25);
console.log("Item Name: ", itemResponse.data.name)
console.log("Item Category: ", itemResponse.data.category.name)
