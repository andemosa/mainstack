import styled from "styled-components";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Referrals = () => {
  return (
    <Container>
      <Headings>
        <div>
          <h4>Top Referral source</h4>
        </div>
        <div>
          <p>View full reports</p>
        </div>
      </Headings>
      <Body>
        <PieChart width={500} height={400}>
          <Pie
            data={data}
            cx={120}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Pie
            data={data}
            cx={420}
            cy={200}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </Body>
    </Container>
  );
};

export default Referrals;

const Container = styled.div`
  padding: 10px;
`;

const Headings = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  & > div:last-of-type {
    color: #ff5403;
    font-size: 13px;
    cursor: pointer;
  }
`;

const Body = styled.div`
  height: 300px;
  width: 100%;
`;
