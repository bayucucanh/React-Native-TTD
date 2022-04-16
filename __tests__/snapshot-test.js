import 'react-native'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import renderer from 'react-test-renderer'
import Input from '../src/input'
import App from '../App';

configure({adapter: new Adapter(), disableLifecycleMethods: true})

const profileWrapper = shallow(<App />)

// jest.mock('@react-navigation/native', () => ({
//   useNavigation: component => component
// }))

// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')
// jest.mock('native-base')

describe('App Screen', () => {
  it('Should renders correctly', () => {
    renderer.create(<App />)
  })

  it('should render `App Screen` module correctly', () => {
    expect(profileWrapper).toMatchSnapshot()
  })
})
