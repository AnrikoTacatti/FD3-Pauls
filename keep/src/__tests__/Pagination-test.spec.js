"use strict";
import React from 'react';
import { Pagination } from '../components/Pagination';
import { NavLink } from 'react-router-dom';
jest.mock('../actions/Pagination.js');
import { actionPageNumber } from '../actions/Pagination.js';



describe('Search-test', () => {
    let state = {
        location: {
            "search": { "math": "" },
            "pathname": "/chapter"
        }
    }

    let dispatch = jest.fn();
    actionPageNumber.mockImplementation((dispatch, data) => { return data; });


    const component = shallow(
        <Pagination perpage="10" total={35} location={location} dispatch={dispatch} />
    );

    test('Search Snapshot', () => {
        expect(component).toMatchSnapshot();
    });
    test('Pagination length', () => {
        const link = component.find(NavLink);
        expect(link).toHaveLength(5);
    });
    test('Pagination action', () => {
        const link = component.find(NavLink).at(0);
        link.simulate('click');
        expect(actionPageNumber).toHaveBeenCalledWith(dispatch, 1);

    });

});



