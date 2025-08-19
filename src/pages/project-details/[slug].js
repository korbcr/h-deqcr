/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import ProjectIntro from "../../components/Project-Intro";
import NextProject from "../../components/Next-Project";
import ProjectVideo from "../../components/Project-Video";
import { API_CONFIG } from "../../config/api";

const ProjectDetails = ({proyecto}) => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  // Verificar si el proyecto existe
  if (!proyecto) {
    return (
      <MainLayout>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Proyecto no encontrado</h1>
              <p>El proyecto que buscas no existe o no está disponible.</p>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <PageHeader
        title={proyecto?.title || "Proyecto"}
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "portfolio", url: "/work1" },
          { id: 3, name: "project details", url: "/project-details" },
        ]}
        image="/assets/img/portfolio/project1/bg.jpg"
      />
      <ProjectIntro 
        description={proyecto?.description || []} 
        client={proyecto?.client || ""} 
        date={proyecto?.date || new Date().toISOString()} 
        category={proyecto?.category || ""} 
      />
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            <a href="#" className="col-lg-4 col-xl-3 col-md-12">
              <img alt="" src="/assets/img/portfolio/project1/1.jpg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/2.jpg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/6.jpg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-12">
              <img alt="" src="/assets/img/portfolio/project1/3.jpg" />
            </a>
          </div>
        </div>
      </section>

      <ProjectVideo />

      <section className="projdtal">
        <div className="justified-gallery">
          <a href="#" className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/portfolio/project1/8.jpg" />
          </a>
          <a href="#" className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/portfolio/project1/9.jpg" />
          </a>
        </div>
      </section>

      <NextProject />
    </MainLayout>
  );
};

export async function getStaticPaths() {
  try {
    const token = process.env.API_TOKEN;
    const res = await fetch(
      `${API_CONFIG.baseURL}/api/projects`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    if (!res.ok) {
      throw new Error(`API responded with status: ${res.status}`);
    }
    
    const data = await res.json();
    
    // Verificar que tenemos datos válidos
    const paths = data.data?.map((project) => ({
      params: { slug: project.slug },
    })) || [];

    return { 
      paths, 
      fallback: "blocking" 
    };
  } catch (error) {
    console.error('Error fetching project paths:', error);
    
    // En caso de error, devolver paths vacíos
    return { 
      paths: [], 
      fallback: "blocking" 
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const token = process.env.API_TOKEN;
    const res = await fetch(
      `${API_CONFIG.baseURL}/api/projects?filters[slug][$eq]=${params.slug}&populate=image`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    if (!res.ok) {
      throw new Error(`API responded with status: ${res.status}`);
    }
    
    const projectData = await res.json();  
    
    // Verificar si se encontró el proyecto
    if (!projectData.data || projectData.data.length === 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        proyecto: projectData.data[0] || null
      },
      // Revalidar cada 60 segundos
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching project:', error);
    
    // En caso de error, devolver 404
    return {
      notFound: true,
    };
  }
}


export default ProjectDetails;
