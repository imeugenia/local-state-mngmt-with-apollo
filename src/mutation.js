import { isDarkModeVar } from "./localStorage";

const toggleDarkMode = () => {
  const current = isDarkModeVar();
  isDarkModeVar(!current);
};

export default toggleDarkMode;
