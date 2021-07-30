import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";

export default function BtnToTop() {
  return (
    <>
      <ScrollUpButton
        ContainerClassName="AnyClassForContainer"
        TransitionClassName="AnyClassForTransition"
        EasingType="linear"
        StopPosition={0}
        ShowAtPosition={520}
      >
        <ArrowUpwardRoundedIcon />
      </ScrollUpButton>
    </>
  );
}
