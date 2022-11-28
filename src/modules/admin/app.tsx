import tw from 'twin.macro';
import { Button, TextField } from '@setel/portal-ui';
import { useAuth, useLogin } from '@setel/web-auth/exposes/admin-auth';
import { AdminReactRouterAdapter } from '@setel/web-common/exposes/admin-routing-adapter';
import { Switch, Route } from 'react-router-dom';
import { Link, useRouter } from './routing';
import { PokemonList } from '../pokemons';

export function AdminApp() {
  const { loginState } = useAuth();
  const { login } = useLogin();

  if (loginState === 'Loading') {
    return null;
  }

  if (loginState === 'Anonymous') {
    return (
      <div
        css={tw`max-w-xl mx-auto mt-16 space-y-5 border p-8 rounded-lg shadow-lg`}
      >
        <h1 css={tw`font-semibold text-2xl text-lightgrey`}>
          Setel Admin portal
        </h1>
        <form
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            const { email, password } = Object.fromEntries(
              new FormData(e.currentTarget)
            );
            login(email as string, password as string, 'setel-admins');
          }}
        >
          <TextField label="Email" type="email" name="email" />
          <TextField label="Password" type="password" name="password" />

          <Button type="submit" variant="primary">
            Login
          </Button>
        </form>
      </div>
    );
  }

  return (
    <main css={tw`container mx-auto pt-8 pb-16`}>
      <Switch>
        <Route path="/" exact>
          <AdminReactRouterAdapter>
            <Home />
          </AdminReactRouterAdapter>
        </Route>
        <Route path="/pokemons">
          <AdminReactRouterAdapter>
            <PokemonList />
          </AdminReactRouterAdapter>
        </Route>
      </Switch>
    </main>
  );
}

function Home() {
  const { sessionPayload } = useAuth();
  const router = useRouter();

  return (
    <div>
      <h1 css={tw`text-3xl mb-8`}>
        Welcome, {sessionPayload?.username || sessionPayload?.email}!
      </h1>
      <div>
        Below navigation methods use the same API as in{' '}
        <pre css={tw`inline`}>web-admin</pre>, check{' '}
        <pre css={tw`inline`}>src/modules/admin/routing.ts</pre> and{' '}
        <a
          href="https://web-docs.setel.my/app-docs/dev/web-common/latest/modules/admin_routing.html"
          target="_blank"
          rel="noopener noreferrer"
          css={tw`text-brand-500 hover:text-brand-800`}
        >
          web-common/exposes/admin-routing
        </a>{' '}
        doc for more info.
      </div>
      <br />
      <Button
        variant="primary"
        onClick={() => router.navigateByUrl('/pokemons')}
      >
        Pokemon Button!
      </Button>
      <br />
      <br />
      <Link to="/pokemons" css={tw`text-brand-500 hover:text-brand-800`}>
        Pokemon Link!
      </Link>
    </div>
  );
}
