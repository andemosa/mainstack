import styled from "styled-components";
import Image from "next/image";

import AlarmIcon from "components/Icons/AlarmIcon";
import DashboardIcon from "components/Icons/DashboardIcon";
import DeleteIcon from "components/Icons/DeleteIcon";
import EditIcon from "components/Icons/EditIcon";
import FileIcon from "components/Icons/FileIcon";
import GroupIcon from "components/Icons/GroupIcon";
import HourGlassIcon from "components/Icons/HourGlassIcon";
import MoreIcon from "components/Icons/MoreIcon";
import PhotoIcon from "components/Icons/PhotoIcon";
import SubscriptionsIcon from "components/Icons/SubscriptionsIcon";

const firstSet = [
  {
    icon: <DashboardIcon />,
    label: "Dashboard",
  },
  {
    icon: <EditIcon />,
    label: "Item 1",
  },
  {
    icon: <GroupIcon />,
    label: "Item 2",
  },
  {
    icon: <HourGlassIcon />,
    label: "Item 3",
  },
];

const secondSet = [
  {
    icon: <PhotoIcon />,
    label: "Item 4",
  },
  {
    icon: <DeleteIcon />,
    label: "Item 5",
  },
];

const thirdSet = [
  {
    icon: <SubscriptionsIcon />,
    label: "Item 6",
  },
  {
    icon: <FileIcon />,
    label: "Item 7",
  },
  {
    icon: <AlarmIcon />,
    label: "Item 8",
  },
];

const MobileSidebar = () => {
  return (
    <>
      <FirstList>
        {firstSet.map((item) => (
          <Item key={item.label}>
            {item.icon}
            <span>{item.label}</span>
          </Item>
        ))}
      </FirstList>
      <Title>OTHERS 1</Title>
      <List>
        {secondSet.map((item) => (
          <Item key={item.label}>
            {item.icon}
            <span>{item.label}</span>
          </Item>
        ))}
      </List>
      <Title>OTHERS 2</Title>
      <List>
        {thirdSet.map((item) => (
          <Item key={item.label}>
            {item.icon}
            <span>{item.label}</span>
          </Item>
        ))}
      </List>
      <UserDiv>
        <Image src={"/images/blessing.png"} alt="user" width={25} height={25} />
        <span>Blessing Daniels</span>
        <MoreIcon />
      </UserDiv>
    </>
  );
};

export default MobileSidebar;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style: none;
  margin: 20px 0;
  @media (max-width: 1200px) {
    margin: 15px 0;
  }
`;

const FirstList = styled(List)`
  & > li:first-of-type {
    border-left: 1px solid #ff5403;
    @media (max-width: 992px) {
      border-left: none;
    }
  }
`;

const Item = styled.li`
  padding-left: 3.2rem;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 0;
  @media (max-width: 1200px) {
    padding-left: 1.75rem;
  }
`;

const Title = styled.p`
  padding-left: 3.5rem;
  @media (max-width: 1200px) {
    padding-left: 1.75rem;
  }
`;

const UserDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 3.5rem;
  padding-right: 10px;
  margin-top: 60px;
  @media (max-width: 1200px) {
    padding-left: 1.75rem;
  }
  @media (max-width: 992px) {
    font-size: 11px;
  }
  & img {
    border-radius: 100%;
  }
  & > svg {
    margin-left: auto;
  }
`;
