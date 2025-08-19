// import Demos from "./demos";
import Home7 from "./home7";
import { apiRequest, API_CONFIG } from "../config/api";

export default function Home({ contentPage }) {
  return <Home7 content={contentPage} />;
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
    
    // En caso de error, retornar props vacías o datos por defecto
    return {
      props: {
        contentPage: null,
      },
      // Reintentar más frecuentemente en caso de error
      revalidate: 10,
    };
  }
}
