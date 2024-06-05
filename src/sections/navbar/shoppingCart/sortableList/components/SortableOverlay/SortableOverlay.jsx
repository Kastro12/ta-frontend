import React from "react";
import { DragOverlay, defaultDropAnimationSideEffects } from "@dnd-kit/core";

const dropAnimationConfig = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      opacity: "0.1",
      active: {
        opacity: "0.1",
      },
    },
  }),
};

export function SortableOverlay({ children }) {
  return (
    <DragOverlay dropAnimation={dropAnimationConfig}>{children}</DragOverlay>
  );
}
