/* eslint-disable import/no-default-export */

import * as React from 'react';
import type { Exposes } from '@setel/web-common/exposes/admin-routing';

/*
 * Standardizing exposes, since we're sharing "pages" to web-admin/dashboard,
 * it'd be less painful not having to update MFE's types in web-admin/dashboard
 * everytime MFE code changes.
 *
 * In `web-admin`, we only need to retrieve page component by path:
 * ```jsx
 * import pokemon from '@setel/web-pokemon/exposes/admin';
 * const pokemonsList = pokemon.routes.get('/pokemons');
 *
 * ...
 * <ReactAdapterProvider>
 *   {pokemonsList && <pokemonsList.Component />}
 * </ReactAdapterProvider>
 * ```
 *
 * Any future changes to `<PokemonList>` or even when a new route added,
 * we can use the same get method to retrieve new component without having
 * to bump `web-pokemon` dep in `web-admin`.
 */
const exposes: Exposes = {
  routes: new Map([
    [
      '/pokemons',
      {
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
