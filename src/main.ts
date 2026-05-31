import { buscarPokemon } from "./services/PokeApiService";
import { CatalogoPokemon } from "./services/CatalogoPokemon";

async function main() {
  const catalogo = new CatalogoPokemon();

  const pikachu = await buscarPokemon("pikachu");
  if (pikachu) catalogo.adicionar(pikachu);

  const charmander = await buscarPokemon("charmander");
  if (charmander) catalogo.adicionar(charmander);

  const duplicado = await buscarPokemon("pikachu");
  if (duplicado) catalogo.adicionar(duplicado);

  await buscarPokemon("pokemon-inexistente");

  catalogo.listar();
  catalogo.remover(25);
  catalogo.listar();
}

main();