import React from 'react';
import { Layout } from '../shared/layout';

export const Fibonacci = () => {
    return (
        <Layout pageId="fibonacci">
            <p>
                TODO: Calculate n-th Fibonacci number - Fib(n)
            </p>
            <p>
                User inputs a number (n) in a textbox, then clicks a button to calculate Fib(n) via a corresponding API call.
                Then the correct result is displayed on the page.
            </p>
        </Layout>
    );
};