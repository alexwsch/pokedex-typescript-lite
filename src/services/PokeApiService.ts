import { PokemonApiResponse, PokemonResumo } from "../models/Pokemon";

export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`);

    if (!resposta.ok) {
      console.log("[ERRO] Pokémon não encontrado");
      return null;
    }

    const dados: PokemonApiResponse = await resposta.json();

    return {
      id: dados.id,
      nome: dados.name,
      tipos: dados.types.map(t => t.type.name),
      altura: dados.height,
      peso: dados.weight
    };

  } catch (error) {
    console.log("[ERRO] Falha na requisição");
    return null;
  }
}