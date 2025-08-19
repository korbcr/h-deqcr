/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import ProjectIntro from "../../components/Project-Intro";
import NextProject from "../../components/Next-Project";
import ProjectVideo from "../../components/Project-Video";
import Gallery from "../../components/Gallery";
import { API_CONFIG } from "../../config/api";

const Proyectos= ({proyecto}) => {
  console.log(proyecto);
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title={proyecto.title}
        slogan={proyecto.slogan}
        fullPath={[/*
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "portfolio", url: "/work1" },
          { id: 3, name: "project details", url: "/project-details" },
        */]}
        image={`${API_CONFIG.baseURL}${proyecto.image[0].url}`}
      />
      <ProjectIntro description={proyecto.description} client={proyecto.client} date={proyecto.date} category={proyecto.category}/>
      <Gallery files={proyecto.gallery} />
      {/*
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
      */}
      <NextProject />
    </MainLayout>
  );
};

export async function getStaticPaths() {
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
  const data = await res.json();
  
  const paths = data.data.map((project) => ({
    params: { slug: project.slug },
  }));
  

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {

  const token = process.env.API_TOKEN;  
  const res = await fetch(
    `${API_CONFIG.baseURL}/api/projects?filters[slug][$eq]=${params.slug}&populate=image&populate=gallery`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const projectData = await res.json();  
  

  return {
    props: {
      proyecto: projectData.data[0]
    }
  };

}

export default Proyectos;
