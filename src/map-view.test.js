import React from 'react';
import { MapView } from './map-view';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import mapboxGl from 'mapbox-gl';

const mockInstantiationTracker = jest.fn()

jest.mock('mapbox-gl', () => ({
  Map: jest.fn()
}));

describe('MapView', () => {
  let wrapper;
  let mockFn = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    mapboxGl.Map.mockImplementation(() => {
      return {
        mockMethod: mockFn
      };
    });
    wrapper = mount(<MapView />)
  });
  it('renders', () => {
    expect(mountToJson(wrapper)).toMatchSnapshot();
  })
  it('initializes mapbox gl', () => {
    expect(mapboxGl.Map).toHaveBeenCalledTimes(1);
  })
})