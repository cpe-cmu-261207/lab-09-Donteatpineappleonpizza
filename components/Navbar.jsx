import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div
      style={{ backgroundColor: "white" }}
      className="hstack d-flex align-items-center gap-2 border-0 rounded-3 p-2 shadow-sm
    d-flex justify-content-end"
    >
      <div className="hstack gap-4">
        <a href="/">
          <img
            className=""
            src="Images/circle.png"
            width="10px"
            height="10px"
          />
          <span className="m-1"> Home </span>{" "}
        </a>
        <a href="/Exp">
          <img
            className=""
            src="Images/circle (1).png"
            width="10px"
            height="10px"
          />
          <span className="m-1"> Experience </span>{" "}
        </a>
        <a href="/Contact">
          <img
            className=""
            src="Images/circle (2).png"
            width="10px"
            height="10px"
          />
          <span className="m-1"> Contact </span>{" "}
        </a>
        <a href="/lab-07">
          <img
            className=""
            src="Images/circle.png"
            width="10px"
            height="10px"
          />
          <span className="m-1"> Lab-07 </span>{" "}
        </a>
      </div>
    </div>
  );
}
