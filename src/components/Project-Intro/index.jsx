import React from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const ProjectIntro = ({ description = [], client = "", date = new Date().toISOString(), category = "" }) => {
  const renderDescription = () => {
    if (!description || !Array.isArray(description) || description.length === 0) {
      return (
        <div className="text">
          <p>Descripción no disponible.</p>
        </div>
      );
    }
    
    return description.map((paragraph, p) => {
      return (
        <div key={`paragraph-${p}`} className="text">
          <p>{paragraph?.children?.[0]?.text || ""}</p>
        </div>
      );
    });
  };
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>Descripción del Proyecto</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            {renderDescription()}
          </div>

          <div className="col-lg-4">
            <div className="item mt-30">
              <h6>Cliente</h6>
              <p>{client}</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item mt-30">
              <h6>Fecha</h6>
              <p>
                {date ? format(new Date(date), "dd MMMM yyyy", {
                  locale: es,
                }) : "Fecha no disponible"}
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item mt-30">
              <h6>Categoria</h6>
              <p>{category}</p>
            </div>
          </div>
          {/*<div className="col-lg-4">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                <Link href="#">Minimal</Link> , <Link href="#">Modern</Link> ,
                <Link href="#">Design</Link>
              </p>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;
