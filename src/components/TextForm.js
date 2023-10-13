import React, {useState} from 'react'

export default function TextForm({heading, theme}) {
    const [text, setText] = useState('');
    const [emails, setEmails] = useState([]);
    const changeText = (e) => {
        setText(e.target.value);
    }

    const toUpper = () => {
        setText(text.toUpperCase());
    }

    const toLower = () => {
        setText(text.toLowerCase());
    }

    const clearText = () => setText("");

    const copyText = async () => {
        try{
            document.getElementById("myBox").select()
            await navigator.clipboard.writeText(text);
        }
        catch(e) {
            console.log(e);
        }
    }

    const removeSpaces = () => {
        let parts = text.split(/[ ]+/);
        setText(parts.join(" "));
    }

    const fetchEmailIDs = () => {
        setEmails([]);
        const regex = 
        /\b\w+([.-]\w+)*@\w+([.-]\w+)*\.([a-zA-Z]){2,8}(\.[a-zA-Z]{2,8})?\b/gm;
        const result = text.match(regex);
        console.log(result);
        if (result) {
            setEmails(result);
            console.log(emails);
        }
        else{
            setEmails([]);
            console.log(emails);
        }
    }

    const divStyle = {
        color: theme === 'light'? 'black': 'white'
    };

  return (
    <>
      <div className="container1" style={{color: theme === 'light'? 'black': 'white'}}>
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={changeText}
            placeholder="Enter the text"
            style={{backgroundColor: theme === 'light'? 'white': 'darkgray'}}
          />
        </div>
        <button className="btn btn-primary mx-3 my-1" onClick={toUpper}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={toLower}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={clearText}>
          Cleat Text
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={removeSpaces}>
          Remove extra space
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={copyText}>
          Copy to clipboard
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={fetchEmailIDs}>
          Fetch email Ids
        </button>
      </div>
      <div className="container2" style={{color: theme === 'light'? 'black': 'white'}}>
        <h1 className="textSummary my3">Your Text Summary</h1>
        <p>number of characters: {text.length}</p>
        <p>number of words: {text.length !== 0 ? text.split(" ").length : 0}</p>
        <p>
          {text.length !== 0 ? 0.08 * text.split(" ").length : 0} minutes to
          read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Some text in the above text box to preview."}
        </p>
        <h2>Email List</h2>
        {emails.map((e, i) => (
          <p key="i">{e}</p>
        ))}
      </div>
    </>
  );
}
