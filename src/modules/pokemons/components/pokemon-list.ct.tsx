/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { renderWithStates } from 'lib/test-helper';
import { PokemonList } from './pokemon-list';

it('<PokemonList >', () => {
  // mock network response
  cy.intercept(
    'https://pokemon-json.herokuapp.com/api/pokemons*',
    { fixture: 'pokemons.json' } // use existing fixture (in cypress/fixtures dir)
    // can also use inline response
    // [{id: '1', name: 'Bulbasaur'}]
  ).as('getPokemonList');

  renderWithStates(<PokemonList />);

  cy.wait(['@getPokemonList']); // wait for above .as('getPokemonList') response
  cy.findByText('Bulbasaur').should('be.visible');
});
