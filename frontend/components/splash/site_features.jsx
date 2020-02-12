import React from "react";

export default () => {
  return (
    <div className="site-info-container">
      <div className="feature-title-main">Features</div>

      <div className="title-border-line"></div>

      <div className="items-container">

        <div className="site-info-item-1 feature-item">
          <h3 className="item-1-title feature-title">Discover</h3>
          <p className="item-1-body feature-body">Discover and try new beers!</p>
        </div>

        <div className="site-info-item-2 feature-item">
          <h3 className="item-2-title feature-title">Review and Share</h3>
          <p className="item-2-body feature-body">See beers being reviewed on your feed and share your own reviews!</p>
        </div>

        <div className="site-info-item-3 feature-item">
          <h3 className="item-3-title feature-title">Comment &amp; Toast</h3>
          <p className="item-3-body feature-body">Tell your friends what you think of beers they've had and give them a 'toast' from anywhere in the world!</p>
        </div>

      </div>

    </div>
  );
};