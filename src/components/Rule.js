import React from "react";
import { useDrag } from "react-dnd";
import { ReactComponent as Dragicon } from "./drag.svg";
import DropDownText from "./tools/DropDownText";
const Rule = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "rule",
    item: { id: props.rule.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className={!isDragging ? "rule" : "dragging-rule"}
      style={
        props.droped
          ? { cursor: "default", backgroundColor: "rgb(203 230 246)" }
          : { cursor: "grab" }
      }
    >
      <Dragicon />
      <i
        className={props.rule.icon}
        style={{ marginRight: "9px", opacity: "0.57" }}
      ></i>
      <div>{props.rule.name}</div>
      {!props.droped ? (
        <DropDownText
          someClass="dropDown-content information "
          icon="gg-info"
          content={props.rule.description}
        />
      ) : (
        <DropDownText
          someClass="dropDown-content options"
          icon="gg-more-vertical-alt"
          content={
            <>
              <div style={{ height: "30px", margin: "15px" }}>Config</div>
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
      )}
    </div>
  );
};

export default Rule;
