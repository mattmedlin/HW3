import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Home = () => {
  {
    /* Found a widget to embed a twitter timeline and linked to a FakeScience twitter account also used
     https://github.com/syntacticsolutions/react-bootstrap-starter/blob/master/src/App.js as a reference*/
  }
  return (
    <div>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "20vh",
        }}
      >
        WELCOME TO OUR LAB!!
      </h2>
      <img
        src="logo192.png"
        class="rounded mx-auto d-block"
        alt="Responsive image"
        style={{ paddingBottom: "10vh" }}
      ></img>
      <div className="row">
        <div className="column">
          <p
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "20vh",
              paddingLeft: "20vh",
              paddingRight: "20vh",
            }}
          >
            Cras facilisis urna ornare ex volutpat, et convallis erat elementum.
            Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est,
            eget rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue
            nec molestie. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.Cras facilisis urna ornare ex
            volutpat, et convallis erat elementum. Ut aliquam, ipsum vitae
            gravida suscipit, metus dui bibendum est, eget rhoncus nibh metus
            nec massa. Maecenas hendrerit laoreet augue nec molestie. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.Cras facilisis urna ornare ex volutpat, et convallis
            erat elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui
            bibendum est, eget rhoncus nibh metus nec massa. Maecenas hendrerit
            laoreet augue nec molestie. Cum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus.Cras facilisis urna
            ornare ex volutpat, et convallis erat elementum. Ut aliquam, ipsum
            vitae gravida suscipit, metus dui bibendum est, eget rhoncus nibh
            metus nec massa. Maecenas hendrerit laoreet augue nec molestie. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "10vh",
            }}
          >
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="fakescience"
              options={{ width: "1000", height: "800" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
