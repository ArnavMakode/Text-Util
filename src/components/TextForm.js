import React, {useState} from 'react'

export default function TextForm({heading}) {
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

  return (
    <>
        <div className="container1">
        <h1>{heading}</h1>
        <div className="mb-3">
            <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={changeText}
            placeholder="Enter the text"
            />
        </div>
        <button className="btn btn-primary mx-2" onClick={toUpper}>
            Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={toLower}>
            Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={fetchEmailIDs}>
            Fetch email Ids
        </button>
        </div>
        <div className="container2">
            <h1 className="textSummary my3">Your Text Summary</h1>
            <p>number of characters: {text.length}</p>
            <p>number of words: {(text.length !== 0) ? text.split(" ").length : 0}</p>
            <p>{(text.length !== 0) ? 0.08 * text.split(" ").length : 0} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
            <h2>Email List</h2>
            {emails.map((e, i) => (
                <p key='i'>{e}</p>
            ))}
        </div>
    </>
  );
}
