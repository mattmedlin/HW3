import React, { Component } from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>HOME</h2>
        <div>
          <div className="twitter-feed" style={{ textAlign: "center" }}>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="saurabhnemade"
              options={{ width: 700 }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
