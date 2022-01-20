import React, { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import DropDown from "./tools/DropDown";
import { ReactComponent as Dragicon } from "./drag.svg";
import DropDownText from "./tools/DropDownText";
import Textarea from "./tools/Textarea";
const Rule = (props) => {
  const [configing, setConfiging] = useState(false);
  const [configClass, setConfigClass] = useState("");
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "rule",
    item: { id: props.rule.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  /*
  ===============
  Change Class if config is clicked
  =============== 
   */
  const setClass = () => {
    configing
      ? setConfigClass("config-content open")
      : setConfigClass("config-content");
  };

  useEffect(() => {
    setClass();
  }, [configing]);
  const some = [
    { text: "Start with", value: "Sw" },
    { text: "End with", value: "Ew" },
    { text: "Contains", value: "C" },
  ];
  return (
    <div
      ref={!props.droped ? drag : null}
      className={!isDragging ? "rule" : "dragging-rule"}
      style={
        props.droped
          ? {
              cursor: "default",
              backgroundColor: "rgb(203 230 246)",
              position: "relative",
            }
          : { cursor: "grab" }
      }
    >
      <Dragicon />
      <i
        className={props.rule.icon}
        style={{ marginRight: "9px", opacity: "0.57" }}
      ></i>
      <div className="rule-name">{props.rule.name}</div>
      {!props.droped ? (
        <DropDownText
          parentClass="dropDown"
          someClass="dropDown-content information "
          icon="gg-info"
          content={props.rule.description}
        />
      ) : (
        <>
          <DropDownText
            parentClass="dropDown"
            someClass="dropDown-content options"
            icon="gg-more-vertical-alt"
            content={
              <>
                <div
                  className="config-button"
                  onClick={() => setConfiging(true)}
                >
                  Config
                </div>
                <br></br>
                <div
                  onClick={() => props.deleteRule(props.rule.id)}
                  style={{ height: "30px", margin: "15px" }}
                >
                  Delete
                </div>
              </>
            }
          />
          <div className={configClass}>
            <DropDown values={some} />
            <Textarea height="39px" name="Term" />
          </div>
        </>
      )}
    </div>
  );
};

export default Rule;
