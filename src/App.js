import {useState} from 'react';

function App() {
    const [userInput, setUserInput] = useState('');
    const [output, setOutput] = useState('');
    const [charactersCount, setCharactersCount] = useState(0);

    const changeHandler = (event) => {
        const input = event.target.value;
        setUserInput(input);
        setCharactersCount(input.length);
        setOutput(btoa(input));
    };

    return (
        <div className='container'>
            <h1 className="text-center">useState example</h1>
            <p className="text-center">Enter text and generate base64 encoded value.</p>
            <div className="main-container">
                <div className="input-container">
                    <textarea
                        className='input-textarea'
                        value={userInput}
                        rows={10}
                        onChange={changeHandler}
                    />
                    <p>Char {charactersCount}</p>
                </div>
                <div className="output-container">
                    <pre className='output'>{output}</pre>
                </div>
            </div>
        </div>
    );
}

export default App;
