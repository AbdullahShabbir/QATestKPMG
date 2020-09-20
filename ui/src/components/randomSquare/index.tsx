import React from 'react';
import { Layout } from '../shared/layout';

export const RandomSquare = () => {
    return (
        <Layout pageId="randomSquare">
            <p>
                TODO: Calculate random square (i.e. rand(0, n)^2), where random number is between 0 and n.
            </p>
            <p>
                User inputs a number (n) in a textbox, then clicks a button to calculate Fib(n) via a corresponding API call.
                Then the correct result is displayed on the page.
            </p>
        </Layout>
    );
};