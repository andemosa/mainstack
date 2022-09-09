import { useState } from "react";
import styled from "styled-components";
import useSWRImmutable from "swr/immutable";
import axios from "axios";

import LoadingSpinner from "components/LoadingSpinner";
import Locations from "components/Charts/Locations";
import PageViews from "components/Charts/PageViews";
import Referrals from "components/Charts/Referrals";
import Navbar from "./Navbar";

const tagsData = [
  {
    label: "1 Day",
    id: 0,
  },
  {
    label: "3 Days",
    id: 1,
  },
  {
    label: "7 Days",
    id: 2,
  },
  {
    label: "30 Days",
    id: 3,
  },
  {
    label: "All Time",
    id: 4,
  },
  {
    label: "Custom Date",
    id: 5,
  },
];

const fetcher = (url) => axios.get(url).then((res) => res.data);

const BodyComp = () => {
  const { data, error } = useSWRImmutable(
    "http://test.api.mainstack.io/",
    fetcher
  );

  const [display, setDisplay] = useState(0);

  if (!data && !error)
    return (
      <Container>
        <LoadingSpinner />
      </Container>
    );

  if (error)
    return (
      <Container>
        <Error>An error occurred</Error>
      </Container>
    );

  return (
    <Container>
      <NavCon>
        <Navbar />
      </NavCon>

      <Wrapper>
        <Top>
          <p>Dashboard</p>
        </Top>
        <Body>
          <Headings>
            <div>
              <h1>Good morning, Blessing ⛅️</h1>
              <p>Check out your dashboard summary.</p>
            </div>
            <div>
              <p>View analytics</p>
            </div>
          </Headings>
          <Tags>
            {tagsData.map((item) => (
              <Tag
                key={item.id}
                onClick={() => setDisplay(item.id)}
                current={display === item.id}
              >
                {item.label}
              </Tag>
            ))}
          </Tags>
          <Card>
            <PageViews obj={data?.graph_data?.views} />
          </Card>
          <Options>
            <Card>
              <Locations data={data?.top_locations} />
            </Card>
            <Card>
              <Referrals data={data?.top_sources} />
            </Card>
          </Options>
        </Body>
      </Wrapper>
    </Container>
  );
};

export default BodyComp;

const Container = styled.section`
  color: #131316;
  flex: 7;
`;

const NavCon = styled.div`
  display: none;
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
  }
`;

const Error = styled.h3`
  text-align: center;
  margin: 2em 0;
`;

const Wrapper = styled.div`
  @media (max-width: 992px) {
    padding-top: 3em;
  }
`;

const Top = styled.div`
  padding: 1.5rem 3rem;
  @media (max-width: 1200px) {
    padding: 1.5rem;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

const Body = styled.section`
  padding: 1.5rem 3rem;
  @media (max-width: 1200px) {
    padding: 1.5rem;
  }
`;

const Headings = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > p {
      color: #31373d;
      font-size: 13px;
    }
  }
  & > div:last-of-type {
    color: #ff5403;
    font-size: 13px;
    cursor: pointer;
  }
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
`;

const Tag = styled.div`
  padding: 5px 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ current }) => (current ? "#FF5403" : "#31373d")};
  background: ${({ current }) => (current ? "#FFDDCD" : "#ffffff")};
  border: ${({ current }) =>
    current ? "1px solid #FF5403" : "1px solid #eff1f6"};
  @media (max-width: 992px) {
    font-size: 12px;
  }
  @media (max-width: 576px) {
    font-size: 8px;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #eff1f6;
  border-radius: 12px;
`;

const Options = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin: 20px 0;
  & > div {
    flex: 1;
  }
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
