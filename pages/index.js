import { ThemeProvider } from "theme-ui";
import theme from "../components/theme";
import Head from "next/head";
import Profile from "../components/profile";

import Layout from "../components/layout";

const Home = () => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>ThemeUI Form</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <main>
        <Profile />
      </main>
    </Layout>
  </ThemeProvider>
);

export default Home;
