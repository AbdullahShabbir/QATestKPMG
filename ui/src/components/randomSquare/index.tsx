import React, { useState, useEffect } from 'react';
import { Layout } from '../shared/layout';

export const RandomSquare = () => {
    const [square, setSquare] = useState("");

    async function getSquare() {
        const result = await fetch('api/math/random-square/4');
        result.json().then(result => setSquare(result));
    }

    useEffect(() => {
        getSquare();
    }, []);

    return (
        <Layout pageId="randomSquare">
            <p>
                User inputs a number (n) in a textbox, then clicks a button to calculate Fib(n) via a corresponding API call.
                Then the correct result is displayed on the page.
            </p>
            <form>
                <input type="text" placeholder="Enter Number" />
                <br />
                <button onClick={() => getSquare()}>Submit</button>
            </form>

            <p>The Square is {JSON.stringify(square)}</p>
        </Layout>
    );
};