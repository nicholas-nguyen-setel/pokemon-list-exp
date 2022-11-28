import { Card, DataTable as Table } from '@setel/portal-ui';
import { ajax } from '@setel/web-common/exposes/ajax';
import { useQuery } from 'react-query';
import tw from 'twin.macro';

export const PokemonList = () => {
  const { data, isLoading } = useQuery(['pokemons'], {
    queryFn: () =>
      ajax.get<
        Array<{
          id: number;
          name: string;
          sprite: string;
        }>
      >('https://pokemon-json.herokuapp.com/api/pokemons', {
        params: {
          _limit: 20,
        },
      }),
  });

  return (
    <div css={tw`max-w-4xl mx-auto space-y-5`}>
      <Card>
        <Card.Heading title="Portal Ui Design" />
        <Card.Content>
          <p>
            You're using components from <code>@setel/portal-ui</code>.
          </p>
          <p>
            Visit the{' '}
            <a
              href="https://web-docs.setel.my/portal-ui/index.html"
              target="_BLANK"
              rel="noreferrer"
              css={tw`text-brand-500 font-bold hover:underline`}
            >
              docs site
            </a>{' '}
            to view all the components.
          </p>
        </Card.Content>
      </Card>
      <Table isLoading={isLoading}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Name</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data &&
            data.map((pokemon) => (
              <Table.Tr key={pokemon.id}>
                <Table.Td>{pokemon.id}</Table.Td>
                <Table.Td>
                  {pokemon.name}{' '}
                  <img
                    src={pokemon.sprite}
                    css={tw`inline-block`}
                    width={40}
                    height={40}
                    alt=""
                  />
                </Table.Td>
              </Table.Tr>
            ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};
