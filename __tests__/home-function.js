import 'react-native'
import React from 'react'
import Home from '../Home';

import renderer from 'react-test-renderer';

it('function and state test care', () => {
  let HomeData = renderer.create(<Home />).getInstance();

  HomeData.change(2)

  expect(HomeData.state.data).toEqual(20)
})

it('tambah', () => {
  let HomeData = renderer.create(<Home />).getInstance();

  HomeData.tambah(10)

  expect(HomeData.state.data).toEqual(20)
})

it('kurang', () => {
  let HomeData = renderer.create(<Home />).getInstance();

  HomeData.kurang(30)

  expect(HomeData.state.data).toEqual(20)
})

it('bagi', () => {
  let HomeData = renderer.create(<Home />).getInstance();

  HomeData.bagi(40)

  expect(HomeData.state.data).toEqual(20)
})