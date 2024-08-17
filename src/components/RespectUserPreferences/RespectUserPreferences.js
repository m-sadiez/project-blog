"use client";
const { MotionConfig } = require("framer-motion");

function RespectUserPreferences({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export default RespectUserPreferences;
