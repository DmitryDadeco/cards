import { RootStoreProvider } from '../src/providers/RootStoreProvider';

const App = ({
  Component,
  pageProps,
}) => (
  <RootStoreProvider hydrationData={pageProps.hydrationData}>
    <Component {...pageProps} />
  </RootStoreProvider>
);

export default App;
