import React from 'react';
import {mount} from 'enzyme';
import {mountToJson} from 'enzyme-to-json';
import mapboxGl from 'mapbox-gl';
import MapView from './map-view';

jest.mock('mapbox-gl', () => ({
    Map: jest.fn()
}));

describe('MapView', () => {
    let wrapper;
    let mockFn = jest.fn();
    let mockCallback = jest.fn()
    let testActiveViewPort = {
        activeViewPort: {
            center: [-122.396449, 37.791256],
            zoom: 15
        }
    }

    beforeEach(() => {
        jest.clearAllMocks();
        mapboxGl.Map.mockImplementation(() => {
            return {
                flyTo: mockFn,
                on: mockFn,
            };
        });
        wrapper = mount(<MapView handleUpdateFavoritesList={mockCallback} activeViewPort={testActiveViewPort}/>)
    });
    it('renders map', () => {
        expect(mountToJson(wrapper)).toMatchSnapshot();
    })
    it('initializes mapbox gl', () => {
        expect(mapboxGl.Map).toHaveBeenCalledTimes(1);
    })
    it('clicking on map fires updateFavoriteList callback', () => {
        wrapper.find('.map-container').simulate("click", mockCallback())
        expect(mockCallback.mock.calls.length).toEqual(1);
    })
})




