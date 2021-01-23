


// 异步的action
export function showDrawer() {
  return dispatch => {
    dispatch({
      type: 'showDrawer'
    })
  }
}

export function hideDrawer() {
  return dispatch => {
    dispatch({
      type: 'hideDrawer'
    })
  }
}

export function changeCata(currentCata) {
  return dispatch => {
    dispatch({
      type: 'changeCata',
      currentCata
    })
  }
}
