import React, { useState, useEffect } from 'react';
import { Layout } from '../shared/layout';


export const Factorial = () => {
    const [fact, setFact] = useState("");

    async function getFactorial() {
        const result = await fetch('api/math/factorial/6');
        result.json().then(result => setFact(result));
    }

    useEffect(() => {
        getFactorial();
    }, []);

    return (
        <Layout pageId="factorial">
            <p>
                User inputs a number (n) in a textbox, then clicks a button to calculate n! via a corresponding API call.
                Then the correct result is displayed on the page.
            </p>
            <form>
                <input type="text" placeholder="Enter Number" />
                <br />
                <button onClick={() => getFactorial()}>Submit</button>
            </form>

            <p>The factorial is {JSON.stringify(fact)}</p>
        </Layout>
    );
};