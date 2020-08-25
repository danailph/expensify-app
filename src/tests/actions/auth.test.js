import {login, logout}  from '../../actions/auth'

test('should generate login action object', ()=>{
  expect(login(1)).toEqual({
    type: 'LOGIN',
    uid: 1
  })
})
test('should generate logout action object ', ()=>{
  expect(logout()).toEqual({type:'LOGOUT'})
})
