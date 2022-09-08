import React from "react";
function MainContent() {
  return (
    <div className="main-content">
      <div className="Foodtime row">
        <div className="col time">
          <h3>Breakfast</h3>
        </div>
        <div className="col time">
          <h3>Lunch</h3>
        </div>
        <div className="col time">
          <h3>Dinner</h3>
        </div>
      </div>
      <div className="buttons">
        <div className="btn fooditem" id="veg">
          VEG
        </div>
        <div className="btn fooditem" id="nonveg">
          NON VEG
        </div>
      </div>
      <div className="Ratings">
        <div className="text">
          <p>
            Your Feedback is
            <br />
            Value Able to us
          </p>
        </div>
        <div className="btn rate-btn">RATE US!</div>
      </div>
    </div>
  );
}
export default MainContent;
