/* eslint-disable import/no-default-export */

import * as React from 'react';
import type { Exposes } from '@setel/web-common/exposes/routing';

/*
 * Standardizing exposes, since we're sharing "pages" to web-admin/dashboard,
 * it'd be less painful not having to update MFE's types in web-admin/dashboard
 * everytime MFE code changes.
 *
 * In `web-dashboard`, we only need to retrieve page component by path:
 * ```jsx
 * import pokemon from '@setel/web-pokemon/exposes/pokemons';
 * const pokemonsList = pokemon.routes.get('/pokemons');
 *
 * ...
 * pokemonsList &&
 *   <Route
 *     path={'/pokemons'}
 *     component={pokemonsList.Component}
 *     exact
 *   />
 * ```
 *
 * Any future changes to `<PokemonList>` or even when a new route added,
 * we can use the same get method to retrieve new component without having
 * to bump `web-pokemon` dep in host.
 */

const exposes: Exposes = {
  routes: new Map([
    [
      '/pokemons',
      {
        // prefer lazy component to reduce page load time
        Component: React.lazy(() =>
          import('modules/pokemons').then((mod) => ({
            default: mod.PokemonList,
          }))
        ),
      },
    ],
    [
      '/secret-pokemons',
      {
        /*
         * Provides required permissions along with exposed object.
         * In web-dashboard, can use this to pass to <PermissionRoute>:
         *
         * import pokemon from '@setel/web-pokemon/exposes/pokemons';
         * const secretPokemons = pokemon.routes.get('/secret-pokemons');
         *
         * secretPokemons &&
         *   <PermissionRoute
         *     accessWith={secretPokemons.accessWith as string[]}
         *     path={'/pokemons'}
         *     component={pokemons.Component}
         *     exact
         *   />
         */
        accessWith: ['secret_pokemon_view'],
        Component: React.lazy(() =>
          import('modules/pokemons').then((mod) => ({
            default: mod.PokemonList,
          }))
        ),
      },
    ],
    // ...
  ]),
};

export default exposes;
