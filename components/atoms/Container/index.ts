import { breakPoints } from "@/styles/breakPoints";
import { styled } from "@/styles/stitches.config";

export const Container = styled("div", {
  maxWidth: breakPoints.lg,
  padding: "0px 120px",
  margin: "0 auto",

  "@me": {
    maxWidth: breakPoints.me,
    padding: "0px 30px",
  },

  "@sm": {
    maxWidth: breakPoints.sm,
    padding: "0px 16px",
  },
});
