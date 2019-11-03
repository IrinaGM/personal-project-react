import React from "react";
import PullRequestList from "./PullRequestList";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Testing PullRequestList',() => {
    test('component renders without any data',() => {
        render(<PullRequestList data={[]}/>)
    });

    test('component shows error message if data is ampty',() => {
        const dataToTest = [];
        const { getByText } = render(<PullRequestList data={dataToTest}/>);
        expect(getByText('No Recent Pull Requests Found')).toBeInTheDocument();
    });

    test('component shows elements for data recieved',() => {
        const dataToTest = [
            {
                title: '[UPDATE] Cohort 8 Changes',
                html_url: 'https://api.github.com/repos/bridge-school/frontend-starter/pulls/2',
                status: 'closed'
            }
        ];
        const { getByText } = render(<PullRequestList data={dataToTest}/>);
        expect(getByText('[UPDATE] Cohort 8 Changes')).toBeInTheDocument();
    });
})