import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './index';
import ButtonTop from '../buttonTop';
import Navbar from "../navbar";
import Header from "../header";
import About from "../about";
import WorkCategories from "../workCategories";
import Counter from "../counter";
import Portfolio from "../portfolio";

configure({adapter: new Adapter()});

describe('<Home />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Home />);
    });

    it('should show ButtonTop', () => {
        expect(wrapper.find(ButtonTop));
    })

    it('should show Navbar', () => {
        expect(wrapper.find(Navbar));
    })

    it('should show Header', () => {
        expect(wrapper.find(Header));
    })

    it('should show About', () => {
        expect(wrapper.find(About));
    })

    it('should show WorkCategories', () => {
        expect(wrapper.find(WorkCategories));
    })

    it('should show Counter', () => {
        expect(wrapper.find(Counter));
    })

    it('should show Portfolio', () => {
        expect(wrapper.find(Portfolio));
    })
});