/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import ProjectIntro from "../../components/Project-Intro";
import NextProject from "../../components/Next-Project";
import ProjectVideo from "../../components/Project-Video";

const ProjectDetails = ({proyecto}) => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title={proyecto.title}
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "portfolio", url: "/work1" },
          { id: 3, name: "project details", url: "/project-details" },
        ]}
        image="/assets/img/portfolio/project1/bg.jpg"
      />
      <ProjectIntro />
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
    const token =
    "4224f5ef2a49a358957778b94bba2c877034ac7174519e5d961cb324e1fb0eb09e5aa1cd1870d395da86b38ff08af31132c9b97d6649440c7b7556048c6ffe6d576e6b513f7f31e1a004becdef899679818866f458ba6d5f45325ec9de5dbf40bd9d181f0d9d0e4c59caf72238c54aed54c41b7940ee0657be6a49a22db8a2f3";
    /*
  const res = await fetch("http://localhost:1337/api/projects", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  */
  const res = await fetch(
    "http://localhost:1337/api/projects",
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
  /*
    const token =
    "4224f5ef2a49a358957778b94bba2c877034ac7174519e5d961cb324e1fb0eb09e5aa1cd1870d395da86b38ff08af31132c9b97d6649440c7b7556048c6ffe6d576e6b513f7f31e1a004becdef899679818866f458ba6d5f45325ec9de5dbf40bd9d181f0d9d0e4c59caf72238c54aed54c41b7940ee0657be6a49a22db8a2f3";
  const res = await fetch(
    `http://localhost:1337/api/projects?filters[slug][$eq]=${params.slug}&populate=image`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
*/
  const token =
    "4224f5ef2a49a358957778b94bba2c877034ac7174519e5d961cb324e1fb0eb09e5aa1cd1870d395da86b38ff08af31132c9b97d6649440c7b7556048c6ffe6d576e6b513f7f31e1a004becdef899679818866f458ba6d5f45325ec9de5dbf40bd9d181f0d9d0e4c59caf72238c54aed54c41b7940ee0657be6a49a22db8a2f3";
  //const res = await fetch("http://localhost:1337/api/hero-sliders", {
  const res = await fetch(
    `http://localhost:1337/api/projects?filters[slug][$eq]=${params.slug}&populate=image`,
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

  /*
  const data = await res.json();
  

  if (!data.data || data.data.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      projecto: data,
    },
  };
  */
}

/*
export async function getStaticPaths() {
  // Simulamos un array de IDs disponibles
  const ids = ['1', '2', '3'];

  const paths = ids.map(id => ({
    params: { id }
  }));
  return {
    paths,
    fallback: 'blocking' // o true/in 'blocking' si quieres ISR
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const token =
    "4224f5ef2a49a358957778b94bba2c877034ac7174519e5d961cb324e1fb0eb09e5aa1cd1870d395da86b38ff08af31132c9b97d6649440c7b7556048c6ffe6d576e6b513f7f31e1a004becdef899679818866f458ba6d5f45325ec9de5dbf40bd9d181f0d9d0e4c59caf72238c54aed54c41b7940ee0657be6a49a22db8a2f3";
  //const res = await fetch("http://localhost:1337/api/hero-sliders", {
  const res = await fetch(
    "http://localhost:1337/api/main-page?populate=ListLastProjects.image",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const projectData = await res.json();  
  console.log(projectData.data.ListLastProjects[0]);

  return {
    props: {
      proyecto: projectData
    }
  };
}
*/

export default ProjectDetails;
