import { useMemo } from "react";
import styled from "styled-components";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import InfoIcon from "components/Icons/InfoIcon";

const formatObj = (obj) => {
  return Object.keys(obj).map((key) => ({
    name: key,
    views: obj[key],
  }));
};

const PageViews = ({ obj }) => {

  const data = useMemo(() => formatObj(obj), [obj]);

  return (
    <Container>
      <Headings>
        <div>
          <h4>Page Views</h4>
          <p>All time</p>
        </div>
        <div>
          <InfoIcon />
        </div>
      </Headings>
      <Body>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="views"
              stroke="#FF5403"
              fill="#ff5403"
              fillOpacity={10}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Body>
    </Container>
  );
};

export default PageViews;

const Container = styled.div`
  padding: 10px;
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
      font-size: 12px;
    }
  }
  & > div:last-of-type {
    cursor: pointer;
  }
`;

const Body = styled.div`
  height: 300px;
  width: 100%;
  margin: 1em 0 0;
`;
