import React, {useState, useEffect} from 'react'

export default function TextForm({heading, theme, showAlert}) {
    const [text, setText] = useState('');
    const [emails, setEmails] = useState([]);

    useEffect(() => {
      setEmails([]);
    },[text]);

    const changeText = (e) => {
        setText(e.target.value);
    }

    const toUpper = () => {
        setText(text.toUpperCase());
        if(text.length > 0) showAlert('Converted to uppercase successfully!', 'success');
        else showAlert('The text is empty', 'warning');
    }

    const toLower = () => {
        setText(text.toLowerCase());
        if(text.length > 0) showAlert('Converted to lowercase successfully!', 'success');
        else showAlert('The text is empty', 'warning');
    }

    const clearText = () => {
      setText("");
      if(text.length > 0) showAlert('cleared text successfully!', 'success');
      else showAlert('Nothing to clear in text', 'warning');
    }

    const copyText = async () => {
        try{
            document.getElementById("myBox").select()
            await navigator.clipboard.writeText(text);
            showAlert('text copied to clipboard successfully', 'success');
        }
        catch(e) {
            console.log(e);
            showAlert('Sorry! Couldn\'t copy', 'warning');
        }
    }

    const removeSpaces = () => {
        let parts = text.split(/[ ]+/);
        setText(parts.join(" "));
        if(text.length > 0) showAlert('removed extra spaces', 'success');
        else showAlert('The text is empty', 'warning');
    }

    const fetchEmailIDs = () => {
        setEmails([]);
        const regex = 
        /\b\w+([.-]\w+)*@\w+([.-]\w+)*\.([a-zA-Z]){2,8}(\.[a-zA-Z]{2,8})?\b/gm;
        const result = text.match(regex);
        if (result) {
            setEmails(result);
            showAlert('found Mail IDs', 'success');
        }
        else{
            setEmails([]);
            showAlert('no Mail ID found', 'warning');
        }
    }

    const countWords = (word) => {
      const matches = word.match(/\S+/g);
      if(matches) return matches.length;
      else return 0;
    } 

  return (
    <>
      <div className="container1" style={{color: theme === 'light'? '#333' : '#ddd'}}>
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={changeText}
            placeholder="Enter the text"
            style={{backgroundColor: theme === 'light'? 'lightgray': 'darkgray'}}
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
      <div className="container2" style={{color: theme === 'light'? '#333' : '#ddd'}}>
        <h1 className="textSummary my3">Your Text Summary</h1>
        <p>number of characters: {text.length}</p>
        <p>number of words: {countWords(text)}</p>
        <p>
          {text.length !== 0 ? 0.08 * text.split(" ").length : 0} minutes to
          read
        </p>
        <h2>Preview</h2>
        <h6>
          {text.length > 0
            ? text
            : "Enter Some text in the above text box to preview."}
        </h6>
        <h2>Email List</h2>
        {emails.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </div>
    </>
  );
}
