//import React from "react";
import Team3 from "../../components/Team3";
import MainLayout from "../../layouts/main";
import Video2 from "../../components/Video2";
import LastProjects from "../../components/LastProjects";
import AboutUs8 from "../../components/About-Us8";
import Services7 from "../../components/Services7";
import Testimonials1 from "../../components/Testimonials1";
import WorkWithoutFilter from "../../components/Work-Without-Filter";
import IntroWithVertical2 from "../../components/Intro-with-vertical2";
import Portfolio2 from "../../components/Portfolio2";

const Home7 = ({ content }) => {
  console.log(content); // Este debería mostrar los posts que vienen de getStaticProps

  /*
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  });
  */
  return (
    <MainLayout>
      <IntroWithVertical2 slider={content.data.slider} />
      <AboutUs8 />
      <Services7 services={content.data.services}/>
      {/*<WorkWithoutFilter />*/}
      <Portfolio2 projects={content.data.featured_projects}/>
      {/*<Team3 />*/}
      <Testimonials1 bigTitle />
      <LastProjects projects={content.data.projects}/>
    </MainLayout>
  );
};

export default Home7;
