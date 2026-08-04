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
import ProyectosDestacados from "../../components/ProyectosDestacados";
import { apiRequest, API_CONFIG } from "../../config/api";

const Home7 = ({ content = { data: {} } }) => {
  console.log(content); // Este debería mostrar los posts que vienen de getStaticProps

  // Valores por defecto para prevenir errores
  const contentData = content?.data || {};
  const slider = contentData.slider || [];
  const services = contentData.services || [];
  const featuredProjects = contentData.featured_projects || [];
  const projects = contentData.projects || [];

  // Verificar si hay algún contenido disponible
  const hasContent = slider.length > 0 || services.length > 0 || featuredProjects.length > 0 || projects.length > 0;

  /*
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  });
  */
  return (
    <MainLayout>
      <IntroWithVertical2 slider={slider} />
      <AboutUs8 />
      <Services7 services={services}/>
      {/*<WorkWithoutFilter />*/}
      <ProyectosDestacados projects={featuredProjects}/>
      {/*<Team3 />*/}
      {/*<Testimonials1 bigTitle />*/}
      {/*<LastProjects projects={projects}/>*/}
    </MainLayout>
  );
};

export async function getStaticProps() {
  try {
    // Usar la función helper para hacer el request al API
    const contentPage = await apiRequest(API_CONFIG.endpoints.mainPage);

    return {
      props: {
        content: contentPage || {
          data: {
            slider: [],
            services: [],
            featured_projects: [],
            projects: []
          }
        },
      },
      // Revalidar cada 60 segundos (ISR - Incremental Static Regeneration)
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching content for home7:', error);
    
    // En caso de error, retornar estructura por defecto
    return {
      props: {
        content: {
          data: {
            slider: [],
            services: [],
            featured_projects: [],
            projects: []
          }
        },
      },
      // Reintentar más frecuentemente en caso de error
      revalidate: 10,
    };
  }
}

export default Home7;
