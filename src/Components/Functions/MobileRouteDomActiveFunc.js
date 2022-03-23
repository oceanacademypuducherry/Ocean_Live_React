export const isSelect = ({ isActive }) => {
  return {
    color: isActive ? "rgba(6, 176, 255, 0.993)" : "rgba(0, 0, 0, 0.747)",
    fontWeight: isActive ? "500" : "transparent",
  };
};
