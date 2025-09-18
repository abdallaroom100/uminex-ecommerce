

export const changeMaskOverlayState = (overlayState: "visible" | "hide") => {
 
  document
    .querySelector(".mask_overlay")
    ?.classList[`${overlayState == "hide" ? "remove" : "add"}`]("visible");
};
