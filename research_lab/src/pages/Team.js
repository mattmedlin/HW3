import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Team = () => {
  {
    /* used https://github.com/syntacticsolutions/react-bootstrap-starter/blob/master/src/App.js team section and adjusted for my needs,
added some styling to the margin */
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2
            className="section-heading text-uppercase"
            style={{ margin: "10vh" }}
          >
            Check Out Our Team!
          </h2>
          <h3
            className="section-subheading text-muted"
            style={{ margin: "10vh" }}
          >
            We are awesome.
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="logo192.png" alt="" />
            <h4>This Dog</h4>
            <p className="text-muted">Lead Designer</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="logo192.png" alt="" />
            <h4>This Guy</h4>
            <p className="text-muted">Lead Marketer</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="logo192.png" alt="" />
            <h4>This Girl</h4>
            <p className="text-muted">Lead Developer</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted" style={{ marginTop: "5vh" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
            laboriosam veritatis, quos non quis ad perspiciatis, totam corporis
            ea, alias ut unde. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad
            perspiciatis, totam corporis ea, alias ut unde. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Aut eaque, laboriosam
            veritatis, quos non quis ad perspiciatis, totam corporis ea, alias
            ut unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis,
            totam corporis ea, alias ut unde. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos
            non quis ad perspiciatis, totam corporis ea, alias ut unde. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
            laboriosam veritatis, quos non quis ad perspiciatis, totam corporis
            ea, alias ut unde.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad
            perspiciatis, totam corporis ea, alias ut unde.Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis,
            quos non quis ad perspiciatis, totam corporis ea, alias ut
            unde.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam
            corporis ea, alias ut unde.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
