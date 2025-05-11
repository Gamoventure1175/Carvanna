const getCustomShadows = (mode: "light" | "dark"): string[] => {
  if (mode === "dark") {
    return [];
  }

  return ["0px 4px 15px -3px #f1ba4d"];
};
