/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { App } from './app';
import { renderWithStates } from './lib/test-helper';

describe('App', () => {
  it('<App /> can render', () => {
    renderWithStates(<App />, { namespace: null });
    cy.findByText(/PDB Login/).should('be.visible');
  });
});

it('can run unit test', () => {
  expect(1 + 1).equal(2);
});
