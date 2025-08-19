import React from "react";
import Team2 from "../../components/Team2";
import Video from "../../components/Video";
import MainLayout from "../../layouts/main";
import Blogs4 from "../../components/Blogs4";
import Intro4 from "../../components/Intro4";
import AboutUs6 from "../../components/About-Us6";
import Services3 from "../../components/Services3";
import Portfolio2 from "../../components/Portfolio2";
import Testimonials1 from "../../components/Testimonials1";
import { apiRequest, API_CONFIG } from "../../config/api";

const Home5 = ({ projects = [] }) => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <Intro4 />
      <Services3 bigTitle grid />
      <Portfolio2 projects={projects} />
      <AboutUs6 />
      <Video />
      <Team2 />
      <Testimonials1 bigTitle />
      <Blogs4 />
    </MainLayout>
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
    console.error('Error fetching projects for home5:', error);
    
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

export default Home5;
