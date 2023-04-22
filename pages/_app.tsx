import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store, persistor } from "../store/store";
import Layout from "../components/Layout";
import { Analytics } from "@vercel/analytics/react";
import { PersistGate } from "redux-persist/integration/react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </PersistGate>
    </Provider>
  );
};

export default App;
