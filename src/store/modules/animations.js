export const namespaced = true

export const state = {
  animationTypes: ["slide", "none"],
  animationType: "slide",
  animationTransition: 0.8,
  animationInterval: 3.5,
}

export const mutations = {
  UPDATE_ANIMATION_TYPE(state, animationType) {
    state.animationType = animationType
  },
  UPDATE_ANIMATION_TRANSITION(state, animationTransition) {
    state.animationTransition = animationTransition
  },
  UPDATE_ANIMATION_INTERVAL(state, animationInterval) {
    state.animationInterval = animationInterval
  },

  RESET_ANIMATION(
    state,
    { animationType, animationTransition, animationInterval },
  ) {
    state.animationType = animationType
    state.animationTransition = animationTransition
    state.animationInterval = animationInterval
  },
}

export const actions = {
  updateAnimationType({ commit }, event) {
    commit("UPDATE_ANIMATION_TYPE", event.target.value)

    console.log(`animations/UPDATE_ANIMATION_TYPE
    state.animationType = ${event.target.value}`)
  },
  updateAnimationTransition({ commit }, event) {
    commit("UPDATE_ANIMATION_TRANSITION", event.target.value)

    console.log(`animations/UPDATE_ANIMATION_TRANSITION
    state.animationTransition = ${event.target.value}`)
  },
  updateAnimationInterval({ commit }, event) {
    commit("UPDATE_ANIMATION_INTERVAL", event.target.value)

    console.log(`animations/UPDATE_ANIMATION_INTERVAL
    state.animationInterval = ${event.target.value}`)
  },

  resetAnimation(
    { commit },
    { animationType, animationTransition, animationInterval },
  ) {
    commit("RESET_ANIMATION", {
      animationType,
      animationTransition,
      animationInterval,
    })

    console.log(`animations/RESET_ANIMATION
    state.animationType = ${animationType}
    state.animationTransition = ${animationTransition}
    state.animationInterval = ${animationInterval}`)
  },
}