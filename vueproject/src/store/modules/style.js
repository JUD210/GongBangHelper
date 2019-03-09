export const state = {
  fontFamilies: ["arial", "verdana", "georgia"],
  title: {
    "font-family": "arial",
    "font-size": 10,
    color: "#2c3e50",
    "background-color": "#ffffff",
  },
  dday: {
    "font-family": "arial",
    "font-size": 10,
    color: "#2c3e50",
    "background-color": "#ffffff",
  },
  date: {
    "font-family": "arial",
    "font-size": 10,
    color: "#2c3e50",
    "background-color": "#ffffff",
  },
}

export const mutations = {
  UPDATE_STYLE(state, { target, attr, style }) {
    state[target][attr] = style
  },
  RESET_STYLE(state, { target, style }) {
    state[target] = { ...style }
  },
}

export const getters = {
  getStyleByAttr: state => (target, attr) => {
    return state[target][attr]
  },
}