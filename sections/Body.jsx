import Locations from "components/Charts/Locations";
import PageViews from "components/Charts/PageViews";
import Referrals from "components/Charts/Referrals";
import { useState } from "react";
import styled from "styled-components";

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

const BodyComp = () => {
  const [display, setDisplay] = useState(0);

  return (
    <Container>
      <Nav>
        <p>Dashboard</p>
      </Nav>
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
          <PageViews />
        </Card>
        <Options>
          <Card>
            <Locations />
          </Card>
          <Card>
            <Referrals />
          </Card>
        </Options>
      </Body>
    </Container>
  );
};

export default BodyComp;

const Container = styled.section`
  color: #131316;
  flex: 7;
`;

const Nav = styled.div`
  padding: 1.5rem 3rem;
`;

const Body = styled.section`
  padding: 1.5rem 3rem;
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
`;
