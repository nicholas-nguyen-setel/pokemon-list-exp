import {
  MerchantLoginForm,
  useAuthStatus,
} from '@setel/web-auth/exposes/merchant-auth';
import tw from 'twin.macro';
import './app.css';
import { PokemonList } from './modules/pokemons';

export const App = () => {
  const authStatus = useAuthStatus();

  return (
    <>
      {authStatus === 'Anonymous' && (
        <div css={tw`max-w-4xl mx-auto space-y-5`}>
          <MerchantLoginForm
            title="PDB Login"
            adminNamespace="pdb-admins"
            merchantNamespace="pdb-merchants"
            onSuccess={console.log}
          />
        </div>
      )}
      {authStatus === 'Authenticated' && <PokemonList />}
    </>
  );
};
