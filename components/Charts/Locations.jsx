import styled from "styled-components";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#599EEA", "#844FF6", "#F09468", "#FAB70A", "#0FB77A"];

const Locations = ({ data }) => {
  return (
    <Container>
      <Headings>
        <div>
          <h4>Top Locations</h4>
        </div>
        <div>
          <p>View full reports</p>
        </div>
      </Headings>
      <Body>
        <Left>
          {data.map((item, idx) => (
            <Row key={idx}>
              <div>
                <Label>
                  <span>{item.country}</span> - <span>{item.count}</span>
                  &nbsp; (<span>{item.percent}%</span>)
                </Label>
              </div>
              <Color>
                <Circles shade={COLORS[idx]}></Circles>
              </Color>
            </Row>
          ))}
        </Left>
        <Right>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={"100%"} height={"100%"}>
              <Pie
                data={data}
                cx={"50%"}
                cy={"50%"}
                innerRadius={25}
                outerRadius={50}
                paddingAngle={0}
                dataKey="percent"
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  index,
                }) => {
                  const RADIAN = Math.PI / 180;
                  // eslint-disable-next-line
                  const radius = 25 + innerRadius + (outerRadius - innerRadius);
                  // eslint-disable-next-line
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  // eslint-disable-next-line
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      fill={COLORS[index % COLORS.length]}
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="central"
                    >
                      {value}%
                    </text>
                  );
                }}
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Right>
      </Body>
    </Container>
  );
};

export default Locations;

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
    font-size: 12px;
    cursor: pointer;
  }
`;

const Body = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  font-size: 12px;
  @media (max-width: 576px) {
    font-size: 10px;
  }
`;

const Right = styled.div`
  flex: 1;
  height: 250px;
  padding-left: 10px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  font-size: 12px;
  & > div:first-of-type {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  & svg {
    width: 15px;
    height: 15px;
  }
  @media (max-width: 992px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const Label = styled.div`
  & > span:first-of-type {
    text-transform: capitalize;
  }
`;

const Color = styled.div``;

const Circles = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: ${(props) => props?.shade};
`;
