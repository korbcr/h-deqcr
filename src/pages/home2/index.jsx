/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs2 from "../../components/About-Us2";
import Services2 from "../../components/Services2";
import Portfolio2 from "../../components/Portfolio2";
import Testimonials1 from "../../components/Testimonials1";
import Team1 from "../../components/Team1";
import Blogs2 from "../../components/Blogs2";
import IntroWithVertical from "../../components/Intro-with-vertical";
import Process from "../../components/Process";
import Brands from "../../components/Brands";
import LightLayout from "../../layouts/light";
import { apiRequest, API_CONFIG } from "../../config/api";

const Home1 = ({ projects = [] }) => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout>
      <IntroWithVertical />
      <Services2 />
      <AboutUs2 />
      <Portfolio2 projects={projects} />
      <Process />
      <Team1 />
      <Testimonials1 withBg />
      <Brands />
      <Blogs2 />
    </LightLayout>
  );
};

export async function getStaticProps() {
  try {
    // Obtener proyectos del API
    const projectsData = await apiRequest('/api/projects?populate=image&pagination[limit]=6');
    
    return {
      props: {
        projects: projectsData?.data || [],
      },
      // Revalidar cada 60 segundos (ISR - Incremental Static Regeneration)
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching projects for home2:', error);
    
    // En caso de error, retornar props vacías
    return {
      props: {
        projects: [],
      },
      // Reintentar más frecuentemente en caso de error
      revalidate: 10,
    };
  }
}

export default Home1;
