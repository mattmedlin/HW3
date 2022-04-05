import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <div className="row">
          <div className="column">
            <p
              style={{
                textAlign: "left",
                width: "80%",
                paddingLeft: "5%",
                paddingTop: "2%",
              }}
            >
              Cras facilisis urna ornare ex volutpat, et convallis erat
              elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui
              bibendum est, eget rhoncus nibh metus nec massa. Maecenas
              hendrerit laoreet augue nec molestie. Cum sociis natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
          <div className="column" style={{ paddingRight: "70px" }}>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="_mattmedlin"
              options={{ width: "1000", height: "800" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
