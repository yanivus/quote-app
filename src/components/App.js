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

  const [q, setQ] = useState("");
  const [a, setA] = useState("");
  const [cat, setCat] = useState("");


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
          setQ(aq.quote);
          setA(aq.author);
        } 
      } catch(e)  {
        setQ(defQ);
        setA(defA);
        params.category = defC;
      }
    };
    mq();
  });


  return (
    <div className="App pageBackground">
      <div>
        <Quote c={q} au={a} cat={capitalFL(params.category)}/>
      </div>
    </div>
  );
}

export default App;
