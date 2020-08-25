import authReducer from '../../reducers/auth'


test('should setup default auth state', () => {
  const state = authReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual({})
})
test('should login', () => {
  const action = {
    type: 'LOGIN',
    uid: 1
  }
  const state = authReducer({}, action)
  expect(state.uid).toBe(1)
})

test('should logout', () => {
  const state = authReducer({uid: 1}, {type: 'LOGOUT'})
  expect(state).toEqual({})
})
