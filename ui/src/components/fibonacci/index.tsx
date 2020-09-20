import React, { useState, useEffect } from 'react';
import { Layout } from '../shared/layout';

export const Fibonacci = () => {
    const [fib, setFib] = useState("");

    async function getFibonacci() {
        const result = await fetch('api/math/fibonacci/6');
        result.json().then(result => setFib(result));
    }

    useEffect(() => {
        getFibonacci();
    }, []);

    return (
        <Layout pageId="fibonacci">
            <p>
                User inputs a number (n) in a textbox, then clicks a button to calculate Fib(n) via a corresponding API call.
                Then the correct result is displayed on the page.
            </p>
            <form>
                <input type="text" placeholder="Enter Number" />
                <br />
                <button onClick={() => getFibonacci()}>Submit</button>
            </form>

            <p>The fibonacci is {JSON.stringify(fib)}</p>
        </Layout>
    );
};