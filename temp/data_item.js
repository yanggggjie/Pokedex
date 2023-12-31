const dataKeys = [
  'id',
  'name',
  'pokemon.url',
  'sprites.back_default',
  'sprites.front_default',
  'sprites.back_shiny',
  'sprites.front_shiny',
]
const data = {
  form_name: '',
  form_names: [],
  form_order: 1,
  id: 225,
  is_battle_only: false,
  is_default: true,
  is_mega: false,
  name: 'delibird',
  names: [],
  order: 353,
  pokemon: {
    name: 'delibird',
    url: 'https://pokeapi.co/api/v2/pokemon/225/',
  },
  sprites: {
    back_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/225.png',
    back_female: null,
    back_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/225.png',
    back_shiny_female: null,
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png',
    front_female: null,
    front_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/225.png',
    front_shiny_female: null,
  },
  types: [
    {
      slot: 1,
      type: {
        name: 'ice',
        url: 'https://pokeapi.co/api/v2/type/15/',
      },
    },
    {
      slot: 2,
      type: {
        name: 'flying',
        url: 'https://pokeapi.co/api/v2/type/3/',
      },
    },
  ],
  version_group: {
    name: 'gold-silver',
    url: 'https://pokeapi.co/api/v2/version-group/3/',
  },
}
