import "../styles/globals.css";
import { EmptyLayout } from "../components/layout/EmptyLayout";
import Script from "next/script";
function App({ Component, pageProps }) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Layout>
      <Component {...pageProps} />
      <Script id="myscript" src="/myscript.js"></Script>
    </Layout>
  );
}
export default App;
