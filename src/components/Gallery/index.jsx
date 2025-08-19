/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const Gallery = ({files, smallTitle}) => {  
  const renderGallery = () => {
    const gallery = files?.map((file, index)=>{
      return             <div key={`image-gallery-${index}`} className="col-lg-4 col-md-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src={`http://localhost:1337${file.url}`} alt="" />
                </div>
                <div className="cont">
                  <h5>
                    {file.caption}
                  </h5>
                  <span>{file.alternativeText}</span>
                </div>
              </div>
            </div>
    });
    return gallery;
  }

  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
    <section className="blog-grid section-padding"         style={{
          padding: "0px",
        }}>
      <div className="container">
        {!smallTitle ? (
          <div className="main-header text-center">
            <h3>Gallería del Proyecto</h3>
            <div className="tex-bg">Gallería</div>
          </div>
        ) : (
          <div className="section-head">
            <h3>Gallería del Proyecto</h3>
          </div>
        )}
      </div>
    </section>    
      <section
        className="works filter-img three-col section-padding"
        style={{
          padding: "0px 0 120px 0",
        }}
      >
        <div className="container">
          <div className="filtering text-center mb-30">
            <div className="filter">
              <span data-filter="*" className="active">
                Todas
              </span>
              <span data-filter=".interior">Interior</span>
              <span data-filter=".theaters">Exteriores</span>
              <span data-filter=".residential">Planos</span>
            </div>
          </div>
          <div className="row gallery">
            {renderGallery()}
            {/*
            <div className="col-lg-4 col-md-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/2.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items residential interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/1.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/5.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/3.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/4.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/6.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items residential interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/1.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/5.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/3.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
