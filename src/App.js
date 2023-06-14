import React, { useState } from 'react';

const App = () => {
  const [showDetails, setShowDetails] = useState(0);
  const [buttonClicks, setButtonClicks] = useState(0);
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    setButtonClicks(buttonClicks + 1);
  };

  const addItem = () => {
    if (inputText.trim() !== '') {
      setItems([...items, inputText]);
      setInputText('');
    }
  };

  const title = 'React Assignment1'; // Define the title variable here

  return (
    <div
      style={{
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f2f2f2',
        padding: '30px',
      }}
    >
      <h1
        style={{
          fontSize: '28px',
          marginBottom: '20px',
          color: '#333',
        }}
      >
        {title}
      </h1>
      <div>
        <button
          style={{
            padding: '12px 24px',
            backgroundColor: '#ff5e3a',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
          onClick={toggleDetails}
        >
          Display details
        </button>
      </div>
      <div>
        {showDetails && (
          <p
            style={{
              marginBottom: '10px',
              fontSize: '16px',
              color: '#555',
            }}
          >
            This is some example paragraph content.
          </p>
        )}
        <p
          style={{
            marginBottom: '10px',
            fontSize: '14px',
            color: '#777',
          }}
        >
          'Display details' button clicked {buttonClicks} times
        </p>
      </div>
      <div>
        <input
          id="inputBox"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter your item here"
          style={{
            padding: '10px',
            marginRight: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            width: '200px',
          }}
        />
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
          }}
          onClick={addItem}
        >
          Add
        </button>
        <br />
        <div>
          <ul
            style={{
              listStyleType: 'none',
              padding: '0',
            }}
          >
            {items.map((item, index) => (
              <li
                key={index}
                style={{
                  padding: '10px',
                  backgroundColor:
                    (index + 1) % 5 === 0 ? '#007bff' : '#ffefde',
                  color: (index + 1) % 5 === 0 ? 'white' : 'initial',
                  borderRadius: '4px',
                  marginBottom: '10px',
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
