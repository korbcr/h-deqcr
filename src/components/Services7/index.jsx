import React from "react";

const Services7 = ({ services }) => {
  const renderServices = () => {
    const list = services.map((service, index) => {
      return (
        <div key={`service-${index}`} className="col-lg-4">
          <div className="item md-mb50">
            <span className={`icon ${service.icon_name}`}></span>
            <h6>{service.title}</h6>
            {service.description.map((paragraph, p) => {
              return (
                <div key={`paragraph-${p}`}>
                  <p>{paragraph.children[0].text}</p>
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      );
    });
    return list;
  };

  return (
    <section className="services section-padding pb-0">
      <div className="container">
        <div className="section-head">
          <h6 className="fw-100 text-u ls10 main-color mb-10">Nuestros</h6>
          <h3>Servicios</h3>
        </div>
        <div className="row">
          {renderServices()}
        </div>
      </div>
    </section>
  );
};

export default Services7;
