import { useEffect, useRef } from 'react';

const Male = () => {
  const svgRef = useRef();

  const changeAbdominals = (muscle) => {
    const svgObjects = svgRef.current.getElementsByClassName("mySvg");

    for (let i = 0; i < svgObjects.length; i++) {
      var svgObject = svgObjects[i].contentDocument;
      console.log("SVGOBJECT" , svgObject.getElementById(''));
      var gElement = svgObject.getElementById(muscle);
      console.log("GELEMNT" , gElement);
      if (gElement) {
        gElement.addEventListener("mouseover", () => {
          gElement.setAttribute("fill", "custom-green");
        });
        gElement.addEventListener("mouseout", () => {
          gElement.setAttribute("fill", "#FFFFFF");
        });
        // Uncomment the following line if you want to navigate to a new page when the user clicks on a muscle
        // gElement.addEventListener("click", () => { window.location.href = "/muscle/" + muscle; });
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
      "glutes",
      "hamstrings",
      "lowerback",
      "lats",
      "traps-middle",
      "triceps"
    ];

    const svgObjects = svgRef.current.getElementsByClassName("mySvg");

    for (let i = 0; i < svgObjects.length; i++) {
      svgObjects[i].addEventListener("load", () => {
        muscles.forEach(changeAbdominals);
      });
    }
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