import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';

import PullRequestListItemStatus from "./PullRequestListItemStatus";

describe('Testing PullRequestListItemStatus', () => {
    test('testing closed status', () => {
        const renderer = new ShallowRenderer();
        const element = renderer.render(<PullRequestListItemStatus status="closed"/>);
        expect(element).toMatchSnapshot();
    });

    test('testing open status', () => {
        const renderer = new ShallowRenderer();
        const element = renderer.render(<PullRequestListItemStatus status="open"/>);
        expect(element).toMatchSnapshot();
    });
})