import React from "react";
function Experience({ imageUrl, name, position, period, percentage }) {
  return (
    <div
      className="container row m-3 p-3"
      style={{ backgroundColor: "#e5e7eb", borderRadius: "10px" }}
    >
      <div className="col-1 my-1 p-3">
        <img
          src={imageUrl}
          alt="logo"
          style={{ borderRadius: "100%", width: "100%" }}
        />
      </div>
      <div className="col-11">
        <h4
          className="fw-bold"
          style={{
            background: "linear-gradient(90deg, #34d399, #3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {name}
        </h4>
        <h5>{position}</h5>
        <p className="text-muted">{period}</p>
      </div>
    </div>
  );
}

export default Experience;
