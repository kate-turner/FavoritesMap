import React from 'react';
import MapView from './map-view';
import Controller from './Controller'
import {mount} from 'enzyme';
import {mountToJson} from 'enzyme-to-json';
import mapboxGl from 'mapbox-gl';
import ListItem from "./ListItem";

const mockInstantiationTracker = jest.fn()

jest.mock('mapbox-gl', () => ({
    Map: jest.fn()
}));

describe('MapView', () => {
    let wrapper;
    // let listWrapper;
    let mockFn = jest.fn();
    let mockCallback = jest.fn()
    let testFavoriteList = ['lat', 'lng']
    beforeEach(() => {
        jest.clearAllMocks();
        mapboxGl.Map.mockImplementation(() => {
            return {
                flyTo: mockFn,
                on: mockFn,
            };
        });
        wrapper = mount(<MapView updateFavoriteList={mockFn}/>)
    });
    it('renders', () => {
        expect(mountToJson(wrapper)).toMatchSnapshot();
    })
    it('initializes mapbox gl', () => {
        expect(mapboxGl.Map).toHaveBeenCalledTimes(1);
    })
    it('clicking on map fires updateFavoriteList callback', () => {
        wrapper.find('.map-container').simulate('click')
        expect(mockCallback.mock.calls.length).toEqual(1);
    })

    it('list item', () => {
        let listWrapper = mount(<ListItem
            favorite={{place_name: '454345, houston TX 83292093', text: 'houston market'}}/>)
      expect(listWrapper.find('Button')).toHaveLength(1
        ).toBe(true);
    })


})