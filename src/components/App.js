import React, { useState, useEffect } from 'react';
import './App.css';
import Quote from "./Quote";
import api from "../api/quotes";

function App() {

  const defQ = 'I refuse to join any club that would have me as a member.';
  const defA = 'Groucho Marx';
  let defC = 'Funny';
  const defCat = defC;

  const categories = ['art', 'funny', 'inspire', 'life', 'love', 'management', 'sports', 'students'];
  const v = categories.sort(()=> Math.random() - Math.random()).slice(0,1);
  defC = v[0];
  const params = {
    "language": "en",
    "category": defC
  }

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState(defC);
  
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
        console.log("calling mq");
        const aq = await getQuote();
        if (aq) {
          setQuote(aq.quote);
          setAuthor(aq.author);
          setCategory(defC);
        } 
      } catch(e)  {
        setQuote(defQ);
        setAuthor(defA);
        setCategory(defCat);
      }
    };
    mq();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(()=>{
  //   const getAllContacts = async () => {
  //     const allContacts = await retrieveContacts();
  //     if (allContacts) setContacts(allContacts);
  //   };
  //   getAllContacts();
  // }, []);



  return (
    <div className="App pageBackground">
      <div>
        <Quote quote={quote} author={author} category={capitalFL(category)}/>
      </div>
    </div>
  );
}

export default App;
