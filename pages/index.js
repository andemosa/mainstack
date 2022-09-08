
import Head from "next/head";
import styled from "styled-components";

import Sidebar from "sections/Sidebar";
import BodyComp from "sections/Body";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Mainstack</title>
        <meta name="description" content="Mainstack Dashboard" />
        <link rel="icon" href="/mainstack-logo.svg" />
      </Head>

      <Container>
        <Sidebar />
        <BodyComp />
      </Container>
    </div>
  );
}

const Container = styled.main`
  display: flex;
  min-height: 100vh;
  max-width: 1900px;
  margin: 0 auto;
`;

