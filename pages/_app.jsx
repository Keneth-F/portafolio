import { contact } from "../data";
import "../styles/globals.css";
import ThemeProvider from "./components/context/ThemeContext";
import Layout from "./components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </main>
  );
}

export default MyApp;
