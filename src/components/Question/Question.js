import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <h1>Questions With Answer</h1>
            <div className='question-container'>
                <div className='question'>
                    <h3>How Does React Work?</h3>
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                </div>
                <div className='question'>
                    <h3>What Is The Difference Between Props and State?</h3>
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.Props are read-only. State is both read and write. <br /> Props is Immutable(cannot be modified). State is Mutable(can be modified). </p>

                </div>
                <div className='question'>
                    <h3>What Does useEffect Do Except Loading Data ?</h3>
                    <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>

                </div>
            </div>
        </div>
    );
};

export default Question;