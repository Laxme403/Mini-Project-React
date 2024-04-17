import { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

const Male = () => {
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
      "abdominals_male_front",
      "obliques_male_front",
      "forearms_male_front",
      "biceps_male_front",
      "shoulders_male_front",
      "traps_male_front",
      "chest_male_front",
      "quads_male_front",
      "calves_male_front",
    ];
    const musclesBody2 = [
      "hamstrings_male_back",
      "lowerback_male_back",
      "glutes_male_back",
      "lats_male_back",
      "traps-middle_male_back",
      "traps_male_back",
      "shoulders_male_back",
      "calves_male_back",
      "triceps_male_back",
      "forearms_male_back",
    ];

    const svgObjects = svgRef.current.getElementsByClassName("mySvg");

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
        data="malebody_f.svg"
        type="image/svg+xml"
        className="w-full h-full object-contain mySvg"
      ></object>
      <object
        data="malebody_b.svg"
        type="image/svg+xml"
        className="w-full h-full object-contain mySvg"
      ></object>
    </div>
  );
};

export default Male;
