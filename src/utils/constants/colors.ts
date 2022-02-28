export const colors = new (class Colors {
  get primary() {
    return { default: "#22E0A1", disabled: "#B5F1DD" };
  }

  get secondary() {
    return { default: "#034AFD" };
  }

  get tertiary() {
    return { default: "#F5FAF8", disabled: "#EAEFED" };
  }

  get feedbackColors() {
    return { success: "#B5F1DD" };
  }

  get neutral() {
    return {
      white: "#FFFFFF",
      black: "#34423D",
      background: "#F8FAF9",
      neutral1: "#EAEFED",
      neutral2: "#CAD6D1",
      neutral3: "#A3B8B0",
      neutral4: "#709085",
      neutral5: "#587169",
    };
  }
})();
