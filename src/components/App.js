import React, { useState, useEffect } from 'react';
import './App.css';
import Quote from "./Quote";
import api from "../api/quotes";

function App() {

  const defQ = 'I refuse to join any club that would have me as a member.';
  const defA = 'Groucho Marx';
  const defC = 'Funny';

  const categories = ['art', 'funny', 'inspire', 'life', 'love', 'management', 'sports', 'students'];
  const v = categories.sort(()=> Math.random() - Math.random()).slice(0,1);
  // console.log(v);
  const params = {
    "language": "en",
    "category": v[0]
  }

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");


  const capitalFL = (p) => {
      return p && p[0].toUpperCase() + p.slice(1);
  };


  
  const getQuote = async () => {
    const q_line = await api.get("", {params: params});
    return q_line.data.contents.quotes[0];
  }

  useEffect(()=> {
    const mq = async () => {
      try {
        const aq = await getQuote();
        if (aq) {
          setQuote(aq.quote);
          setAuthor(aq.author);
        } 
      } catch(e)  {
        setQuote(defQ);
        setAuthor(defA);
      }
    };
    mq();
    setCategory(defC);
  });


  return (
    <div className="App pageBackground">
      <div>
        <Quote quote={quote} author={author} category={capitalFL(category)}/>
      </div>
    </div>
  );
}

export default App;
