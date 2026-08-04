import React from "react";

const ContactInfo = () => {
  return (
    <div className="info pt-80 pb-80">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-lg-4">
            <div className="item h-100">
              <span className="icon pe-7s-phone"></span>
              <div className="cont">
                <h6 className="custom-font" style={{fontSize:24}}>Teléfonos</h6>
                <p>(+506) 88402755</p>
                <p>(+506) 22614790</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item h-100">
              <span className="icon pe-7s-mail-open"></span>
              <div className="cont">
                <h6 className="custom-font" style={{fontSize:24}}>Correos</h6>
                <p>h-deq.oficina@h-deq.com</p>
                <p>sdelgado@h-deq.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item h-100">
              <span className="icon pe-7s-map"></span>
              <div className="cont">
                <h6 className="custom-font" style={{fontSize:24}}>Ubicación</h6>
                <p>
                  Barva, costado sur de la iglesia, LOCALES TITA, Local #4, Heredia, Costa Rica, 40201
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
