import styled from "styled-components";

const Section = styled.section``;

const DivContainer = styled.div`
  width: 100vw;
  height: 100vh;
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
`;

const DivWelcome = styled.div`
  display: flex;
`;

const DivCTA = styled.div`
  display: flex;
`;

function DashboardHeader() {
  return (
    <Header>
      <DivWelcome></DivWelcome>
      <DivCTA></DivCTA>
    </Header>
  );
}

function LeftPane() {
  return null;
}

function RightPane() {
  return null;
}

function ProjectsSection() {
  return null;
}
