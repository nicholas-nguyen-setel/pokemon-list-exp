/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { AdminApp } from './app';
import { renderWithStates } from '../../lib/test-helper.admin';

it('<AdminApp /> can render', () => {
  renderWithStates(<AdminApp />);
  cy.findAllByText(/setel admin portal/i)
    .last()
    .should('be.visible');
});
