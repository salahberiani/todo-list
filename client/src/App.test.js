import React from 'react';
import { shallow, mount } from 'enzyme';
import dayjs from 'dayjs';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas';

import configureStore from 'redux-mock-store';

import App from './App';
import Date from './components/header/date';
import NumberOfTasks from './components/header/numberOfTasks';

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

const initialState = {
  todos: { todos: [{ title: 'learn jest', completed: false, dateOfComplete: null }] },
};
const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);
const store = mockStore(initialState);
sagaMiddleware.run(rootSaga);

describe('rendering components', () => {
  it('render app component without crashing', () => {
    shallow(<App />);
  });
  it('render the date correctly', () => {
    const wrapper = mount(<Date />);
    const date = wrapper.find(`[data-test='dayComponent']`).first().text();
    expect(date).toEqual(`${dayjs().format('dddd')}, ${dayjs().format('DD')}th`);
  });
  it('render the month correctly', () => {
    const wrapper = mount(<Date />);
    const date = wrapper.find(`[data-test='monthComponent']`).first().text();
    expect(date).toEqual(`${dayjs().format('MMMM')}`);
  });
  it('number of tasks work correctly', () => {
    const wrapper = mount(
      <ReduxProvider reduxStore={store}>
        <NumberOfTasks />
      </ReduxProvider>
    );
    expect(wrapper.text()).toEqual(`${initialState.todos.todos.length} Tasks`);
  });
});
