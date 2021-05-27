import React from 'react';
import {mount} from 'enzyme';
import {mountToJson} from "enzyme-to-json";
import ListItem from "./ListItem";

describe('ListItem', () => {
    let mockCallback = jest.fn()
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = mount(<ListItem handleUpdateFavoritesList={mockCallback} favorite={{}} handleSetActiveViewPort={mockCallback}/>)
    });

    it('renders list item', () => {
        expect(mountToJson(wrapper)).toMatchSnapshot();
    })

    it('it renders list item delete button', () => {
        let deleteButton = wrapper.find('button')
        expect(deleteButton).toHaveLength(1);
    })

    it('calls handleUpdateFavoritesList on delete click', () => {
        let deleteButton = wrapper.find('button')
        deleteButton.simulate('click')
        expect(mockCallback.mock.calls.length).toEqual(1);
    })

    it('renders clickable location name', () => {
        let locationName = wrapper.find('.header')
        expect(locationName).toHaveLength(1);
    })
    it('calls handleSetActiveViewPort on location name click', () => {
        let locationName = wrapper.find('.header')
        locationName.simulate('click')
        expect(mockCallback.mock.calls.length).toEqual(1);
    })
})