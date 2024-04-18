import { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

const Female = () => {
  const svgRef = useRef();
  
  const navigate = useNavigate();

  const changeAbdominals = (muscle, num) => {
    const svgObjects = svgRef.current.getElementsByClassName("mySvg");
    let svgObject = svgObjects[num].contentDocument;
    let gElement = svgObject.getElementById(muscle);

    if (gElement) {
      gElement.addEventListener("mouseover", () => {
        let children = gElement.children;
        for (let i = 0; i < children.length; i++) {
          let child = children[i];
          child.setAttribute("fill", "#000000");
        }
      });

      gElement.addEventListener("mouseout", () => {
        let children = gElement.children;
        for (let i = 0; i < children.length; i++) {
          let child = children[i];
          child.setAttribute("fill", "#FFFFFF");
        }
      });

      
      gElement.addEventListener("click", () => {
        navigate(`/exersize/${muscle}`);
      });

      // Uncomment the following line if you want to navigate to a new page when the user clicks on a muscle
      // gElement.addEventListener("click", () => { window.location.href = "/muscle/" + muscle; });
    }
  };

  useEffect(() => {
    const musclesBody1 = [
      "abdominals_female_front",
      "obliques_female_front",
      "forearms_female_front",
      "biceps_female_front",
      "shoulders_female_front",
      "traps_female_front",
      "chest_female_front",
      "quads_female_front",
      "calves_female_front",
    ];
    const musclesBody2 = [
      "hamstrings_female_back",
      "lowerback_female_back",
      "glutes_female_back",
      "lats_female_back",
      "traps-middle_female_back",
      "traps_female_back",
      "shoulders_female_back",
      "calves_female_back",
      "triceps_female_back",
      "forearms_female_back",
    ];

    const svgObjects = svgRef.current.getElementsByClassName("mySvg");
    console.log(svgObjects);
    svgObjects[0].addEventListener("load", () => {
      musclesBody1.forEach((muscle) => changeAbdominals(muscle, 0));
    });
    svgObjects[1].addEventListener("load", () => {
      musclesBody2.forEach((muscle) => changeAbdominals(muscle, 1));
    });
  }, []);

  return (
    <div className="flex gap-20 h-full" ref={svgRef}>
      <object
        data="femalebody_f.svg"
        type="image/svg+xml"
        className="w-full h-full object-contain mySvg"
      ></object>
      <object
        data="femalebody_b.svg"
        type="image/svg+xml"
        className="w-full h-full object-contain mySvg"
      ></object>
    </div>
  );
};

export default Female;

