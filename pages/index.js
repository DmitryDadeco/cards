import Cookies from 'cookies';

import { Cards } from '../src/components/Cards';
import { ColumnsCount } from '../src/components/ColumnsCount';
import { ErrorBoundary } from '../src/components/ErrorBoundary';
import { COLUMNS_COUNT } from '../src/constants/cookies';
import { services } from '../src/services';

const CardsPage = () => (
  <ErrorBoundary>
    <ColumnsCount />
    <Cards />
  </ErrorBoundary>
);

export async function getServerSideProps({ req, res }) {
  const { rowsCount } = await services.cardsService.fetchRowsCount();

  const cookies = new Cookies(req, res);
  const columnsCount = cookies.get(COLUMNS_COUNT) || null;

  return ({
    props: {
      hydrationData: {
        hydrationCardsStore: {
          rowsCount,
          columnsCount,
        },
      },
    },
  });
}

export default CardsPage;
