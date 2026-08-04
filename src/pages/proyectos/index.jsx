/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import ProjectIntro from "../../components/Project-Intro";
import NextProject from "../../components/Next-Project";
import ProjectVideo from "../../components/Project-Video";
import WorkHeader from "../../components/Work-header";
import ProjectList from "../../components/Project-List";
import { API_CONFIG } from "../../config/api";

const Proyectos = ({ proyectos }) => {

  console.log(proyectos);

  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="Nuestros Proyectos"
        fullPath={[
          /*{ id: 1, name: "Contamos con una alta gama de proyectos ", url: "/" }*/
        ]}
        slogan="Contamos con una alta gama de proyectos realizados y en proceso"
        image="/assets/img/portfolio/project1/bg-proyectos.jpg"
      />


      <ProjectList proyectos={proyectos} />

      {/*<ProjectIntro />*/}
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
      */}
      {/*<ProjectVideo />*/}
      {/*
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

      {/*<NextProject />*/}
    </MainLayout>
  );
};

export async function getStaticProps() {
  try {
    const token = process.env.API_TOKEN;
    const res = await fetch(
      `${API_CONFIG.baseURL}/api/projects?populate=image&pagination[pageSize]=100`,
      {
        method: "GET",
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      }
    );

    if (!res.ok) {
      console.warn(`getStaticProps proyectos index: API responded with status ${res.status}`);
      return {
        props: {
          proyectos: [],
        },
        revalidate: 60,
      };
    }

    const projectList = await res.json();
  
  /*
  const paths = data.data.map((project) => ({
    params: { slug: project.slug },
  }));
  */

  // const token = process.env.API_TOKEN; 
  /* 
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
  */

    return {
      props: {
        proyectos: projectList?.data || [],
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("getStaticProps proyectos index failed:", error);
    return {
      props: {
        proyectos: [],
      },
      revalidate: 60,
    };
  }

}

export default Proyectos;
