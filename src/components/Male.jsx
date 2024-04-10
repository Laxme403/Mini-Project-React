import React, { useEffect, useRef } from "react";

const Male = () => {
  const svgRef = useRef(null);

  const changeAbdominals = (muscle) => {
    const svgObjects = svgRef.current.getElementsByClassName("mySvg");

    for (let i = 0; i < svgObjects.length; i++) {
      var svgObject = svgObjects[i].contentDocument;
      var gElement = svgObject.getElementById(muscle);

      if (gElement) {
        gElement.addEventListener("click", function () {
          //window.location.href = `https://localhost:5500/${muscle}.html`;
        });

        gElement.addEventListener("mouseover", function () {
          var pathElements = gElement.querySelectorAll("path");

          pathElements.forEach(function (pathElement) {
            pathElement.setAttribute("fill", "#646a8e");
          });
        });
        gElement.addEventListener("mouseout", function () {
          var pathElements = gElement.querySelectorAll("path");

          pathElements.forEach(function (pathElement) {
            pathElement.setAttribute("fill", "#FFFFFF");
          });
        });
      }
    }
  };

  useEffect(() => {
    const muscles = [
      "abdominals",
      "obliques",
      "forearms",
      "biceps",
      "shoulders",
      "traps",
      "chest",
      "quads",
      "calves",
    ];

    muscles.forEach(changeAbdominals);
  }, []);

  return (
    <div className="flex gap-20 h-full" ref={svgRef}>
      <object
        data="body.svg"
        type="image/svg+xml"
        className="w-full h-full object-contain mySvg"
      ></object>
      <object
        data="body2.svg"
        type="image/svg+xml"
        className="w-full h-full object-contain mySvg"
      ></object>
    </div>
  );
};

export default Male;