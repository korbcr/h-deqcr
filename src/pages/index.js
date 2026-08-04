// import Demos from "./demos";
import Home7 from "./home7";
import { apiRequest, API_CONFIG } from "../config/api";

export default function Home({ contentPage }) {
  // Asegurar que siempre hay una estructura válida
  const safeContentPage = contentPage || {
    data: {
      slider: [],
      services: [],
      featured_projects: [],
      projects: []
    }
  };
  
  return <Home7 content={safeContentPage} />;
}

export async function getStaticProps() {
  try {
    // Usar la función helper para hacer el request al API
    const contentPage = await apiRequest(API_CONFIG.endpoints.mainPage);

    // By returning { props: { contentPage } }, the Home component
    // will receive `contentPage` as a prop at build time
    return {
      props: {
        contentPage,
      },
      // Opcional: revalidar cada 60 segundos (ISR - Incremental Static Regeneration)
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching content:', error);
    
    // En caso de error, retornar estructura por defecto
    return {
      props: {
        contentPage: {
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
