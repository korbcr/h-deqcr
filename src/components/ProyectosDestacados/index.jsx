import React from "react";
import Link from "next/link";
import worksCardEffect from "../../common/worksCardEffect";
import { API_CONFIG } from "../../config/api";

const ProyectosDestacados = ({ projects = [] }) => {
  React.useEffect(() => {
    worksCardEffect();
  }, []);

  const renderProjects = () => {
    if (!projects || !Array.isArray(projects) || projects.length === 0) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <p>No hay proyectos disponibles.</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid">
        <div className="row">
          {projects.map((project, index) => (
            <div
              key={project?.id || index}
              className={`col-lg-3 col-md-6 cluom ${
                index === 0 ? "current" : ""
              }`}
              data-tab={`tab-${index + 1}`}
            >
              <div className="info">
                <h5 className="custom-font">{project?.location || "Ubicación no disponible"}</h5>
                <h4>{project?.title || "Título no disponible"}</h4>
              </div>
              <div className="more">
                <Link href={`/proyectos/${project?.slug || "#"}`}>
                  <a>
                    Ver Proyecto <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="glry-img">
          {projects.map((project, index) => (
            <div
              key={`img-${index}`}
              id={`tab-${index + 1}`}
              className={`bg-img tab-img ${index === 0 ? "current" : ""}`}
              style={{
                backgroundImage: `url('${project?.image?.[0]?.url ? project.image[0].url : "/assets/img/portfolio/project1/bg.jpg"}')`,
              }}
              data-overlay-dark="2"
            ></div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="team section-padding">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <h6 className="fw-100 text-u ls10 main-color mb-10">Proyectos</h6>
            <h3>Destacados</h3>
          </div>
        </div>
      </section>

      <section className="portfolio full-bg">{renderProjects()}</section>
      <div className="row">
        <div className="col-lg-12 col-md-12 text-center">
          <Link href="/proyectos">
            <a className="mt-30 mb-30 ls5 pull-right">Más Proyectos</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProyectosDestacados;
