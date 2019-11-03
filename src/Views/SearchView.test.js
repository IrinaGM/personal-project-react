import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';

import SearchView from './SearchView';


describe('SearchView',() => {
    test('Should render properly', () => {
        const renderer = new ShallowRenderer();
        const element = renderer.render(<SearchView />);
        expect(element).toMatchSnapshot();
    });
});
