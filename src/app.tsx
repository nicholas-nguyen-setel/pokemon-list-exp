import tw from 'twin.macro';
import './app.css';
import { PokemonList } from './modules/pokemons';

export const App = () => {
  const authStatus = useAuthStatus();

  return (
    <>
      {authStatus === 'Anonymous' && (
        <div css={tw`max-w-4xl mx-auto space-y-5`}>Hello world</div>
      )}
      {authStatus === 'Authenticated' && <PokemonList />}
    </>
  );
};
