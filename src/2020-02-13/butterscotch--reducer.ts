const initialState: any = {
  chats: {
    1: [{chatKey: `foo`, name: `foo-name`}, {chatKey: `bar`, name: `bar-name`}],
  },
}

const reducer = (state = initialState, {payload}) => {
  const {
    content: {room},
    chatKey,
  } = payload

  const message = {...payload.content, chatKey}
  const is = state.chats[room].findIndex(v => v.chatKey === chatKey) !== -1
  const chats = {
    ...state.chats,
    [room]: (state.chats[room] || []).concat(is ? [] : message),
  }
  return {...state, chats}
}

const state = initialState

const payload = {content: {room: 1, name: `something-new`}, chatKey: `foo`}
console.log(reducer(state, {payload}))
