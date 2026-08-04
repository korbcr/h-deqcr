import React from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Link from "next/link";
import { API_CONFIG } from "../../config/api";

const LastProjects = ({ smallTitle, projects = [] }) => {
  
  const renderProjects = () => {
    if (!projects || !Array.isArray(projects) || projects.length === 0) {
      return (
        <div className="col-12 text-center">
          <p>No hay proyectos disponibles.</p>
        </div>
      );
    }

    const list = projects.map((project, index) => {
      return (
        <div key={project.id} className="col-lg-4 mb-10">
          <div
            className="item bg-img md-mb50 wow fadeInUp"
            data-wow-delay=".3s"
            style={{
              backgroundImage: `url('${project.image[0].url}')`,
            }}
          >
            <div className="cont">
              <Link href={`/proyectos/${project.slug}`}>
                <a className="date">
                  <span>
                    {format(new Date(project.date), "dd MMMM yyyy", {
                      locale: es,
                    })}
                  </span>
                </a>
              </Link>
              <h6 style={{ color: "#B9D435" }}>
                <Link href={`/proyectos/${project.slug}`}>{project.title}</Link>
              </h6>
              <div className="info">
                <Link href={`/proyectos/${project.slug}`}>
                  <a className="author">
                    <span>Ubicación: {project.location}</span>
                  </a>
                </Link>
              </div>
              <div className="btn-more">
                <Link href={`/proyectos/${project.slug}`}>
                  <a className="simple-btn">Ver Proyecto</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return list;
  };

  return (
    <section className="blog-grid section-padding">
      <div className="container">
        {!smallTitle ? (
          <div className="main-header text-center">
            <h3>Últimos Proyectos.</h3>
            <div className="tex-bg">Proyectos</div>
          </div>
        ) : (
          <div className="section-head">
            <h3>Últimos Proyectos</h3>
          </div>
        )}
        <div className="row">{renderProjects()}</div>
      </div>
    </section>
  );
};

export default LastProjects;
