import React, { useState, useEffect } from 'react';
import './App.css';
import Quote from "./Quote";
import api from "../api/quotes";

function App() {


  const [q, setQ] = useState("");
  const [a, setA] = useState("");

  const getQuote = async () => {
    const q_line = await api.get();
    // console.log(q_line.data.contents.quotes[0].quote);
    return q_line.data.contents.quotes[0];
  }

  useEffect(()=> {
    const mq = async () => {
      const aq = await getQuote();
      if (aq) {
        setQ(aq.quote);
        setA(aq.author);
      }
    };
    mq();
  });


  return (
    <div className="App pageBackground">
      <div>
        <Quote c={q} au={a} />
      </div>
    </div>
  );
}

export default App;
