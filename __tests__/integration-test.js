import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {login} from '../src/login';
// import {homeDummyData} from './homeDummyData'
import {dataLogin} from '../src/dataLogin'

describe('Api', () => {
  it('Api Login', async () => {
    let mockApi = new MockAdapter(axios);
    const loginBody = {
      email: 'zunaedi@gmail.com',
      password: 'zunaedi123',
    };

    mockApi
      .onPost('http://code.aldipee.com/api/v1/auth/login')
      .reply(200, dataLogin);

    // act
    let res = await login(loginBody);
    
    expect(res.data).toEqual(dataLogin);
    expect(res.status).toEqual(200);
  });
});
