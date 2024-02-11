import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegMoon } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import avatarimg from "../assets/avatar.png";
import { RxDashboard } from "react-icons/rx";
import { FaCalendarAlt } from "react-icons/fa";
import { MdGroupAdd } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import chatBotIcon from "../assets/chatbot-icon.png";
import { CiSettings } from "react-icons/ci";

import React from "react";

const Section = styled.section`
  background-color: var(--background-500);
`;

const DivContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem 4rem;
`;

export default function Dashboard() {
  return (
    <Section>
      <DivContainer>
        <DashboardHeader />
        <LeftPane />
        <ProjectsSection />
        <RightPane />
      </DivContainer>
    </Section>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 8rem;
`;

const DivWelcome = styled.div`
  display: flex;
  align-items: stretch;
  font-size: 4rem;
  color: var(--green);
  gap: 1rem;

  p {
    color: #fff;
    font-size: 2.4rem;
  }
`;

const DivCTA = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ButtonCTA = styled.div`
  background-color: var(--green);
  font-size: 2rem;
  font-weight: 600;
  padding: 0.6rem 1rem;
  border-radius: 2rem;
  cursor: pointer;
`;

const DivIcon = styled.div`
  font-size: 3.2rem;
  color: var(--green);
`;

const DivIconNotification = styled.div`
  font-size: 4.2rem;
  color: var(--green);
`;

const DivAvatar = styled.div`
  img {
    width: 4rem;
    object-fit: cover;
  }
  cursor: pointer;
`;

function DashboardHeader() {
  return (
    <Header>
      <DivWelcome>
        <GiHamburgerMenu />
        <p>Welcome back, Anurag</p>
      </DivWelcome>
      <DivCTA>
        <ButtonCTA>Join Project</ButtonCTA>
        <ButtonCTA>Create Project</ButtonCTA>
        <DivIcon></DivIcon>

        <DivIconNotification>
          <IoIosNotificationsOutline />
        </DivIconNotification>
        <DivAvatar>
          <img src={avatarimg} />
        </DivAvatar>
      </DivCTA>
    </Header>
  );
}

const DivLeftPane = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 3.4rem;
  color: var(--green);
  padding-top: 2rem;
`;

const DivLeftPaneTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const DivLeftPaneBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40vh;
  img {
    border-radius: 10rem;
    width: 4rem;
    cursor: pointer;
  }
  font-size: 5rem;
`;

function LeftPane() {
  return (
    <DivLeftPane>
      <DivLeftPaneTop>
        <RxDashboard style={{ cursor: "pointer" }} />
        <FaCalendarAlt style={{ cursor: "pointer" }} />
        <MdGroupAdd style={{ cursor: "pointer" }} />
        <IoMdAdd style={{ cursor: "pointer" }} />
      </DivLeftPaneTop>
      <DivLeftPaneBottom>
        <img src={chatBotIcon} alt="chat bot icon" />
        <CiSettings style={{ cursor: "pointer" }} />
      </DivLeftPaneBottom>
    </DivLeftPane>
  );
}

function RightPane() {
  return null;
}

const ProjectsSectionDiv = styled.div`
  margin-left: 8rem;
  padding-top: 2rem;
  h1 {
    color: var(--green);
    margin-bottom: 4rem;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4rem;
  row-gap: 2rem;
  padding: 2rem 2rem;
`;

const ProjectCardComponent = styled.div`
  height: 18rem;
  background-color: var(--green);
  border-radius: 1rem;
  padding: 1rem 2rem;
`;

const ProjectCardTopDiv = styled.div`
  border-bottom: 1px solid #d9d9d9;
  color: var(--secondary-500);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h3 {
    font-weight: 600;
    color: #000;
    font-size: 2.8rem;
    white-space: nowrap;
  }
`;
const ProjectCardBottomDiv = styled.div``;

function ProjectsSection() {
  return (
    <ProjectsSectionDiv>
      <h1>Active Projects</h1>
      <CardsGrid>
        {Array.from({ length: 4 }).map((_, index) => (
          <ProjectCardComponent key={index}>
            <ProjectCardTopDiv>
              <h3>Devsprint Hackathon</h3>
              <p>
                The annual 12 hour hackathon involving innovative, improved and
                effective solutions to issues from various domains
              </p>
            </ProjectCardTopDiv>
            <ProjectCardBottomDiv></ProjectCardBottomDiv>
          </ProjectCardComponent>
        ))}
      </CardsGrid>
    </ProjectsSectionDiv>
  );
}
