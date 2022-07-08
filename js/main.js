import dataset from './model/dataset.js';
import pokemons from './model/pokemon.js';


const pokeForm = document.querySelector('#pokeForm');

pokemons.load(dataset);


function loadPokemons() {
    const pokemon = pokemons.readAll();
  
    for (const pkm of pokemon) {
      createCardView(pkm);
    }
  };
  
  function createCardView(card) {
    const cardsView = `
          <div class="card-pkm col-sm-6 col-lg-4 col-xl-2 mb-3" id="pkm-${card.id}">
            <div class="card">
              <div class="card-header text-center font-weight-bold">
                <span class="pkm-name">
                  ${card.name}
                </span>
              </div>
              <div class="card-body p-0">
                <img src="${card.image}" alt="${card.name}" class="pkm-image w-100">
              </div>
            </div>
          </div>
        `;
  
    const cardsDeck = document.querySelector('.poke-deck');
  
    cardsDeck.insertAdjacentHTML('beforeend', cardsView);
  };
  
  pokeForm.onsubmit = (e) => {
    e.preventDefault();

    const pokemon = Object.fromEntries(new FormData(pokeForm));

    const newPokemon = pokemons.create(pokemon);

    console.log(newPokemon);

    createCardView(newPokemon);

    //$('#pokeFormModal').modal('hide');
  };

  function resetForm(){
    document.getElementById('#pokeForm').reset();
  };

  loadPokemons();