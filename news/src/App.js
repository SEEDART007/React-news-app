
import Box from './Box';
import { useEffect, useState } from 'react';
import Header from './Header';
import Lottie from 'lottie-react'
import Basei from './Base.json'
import Time from './Time';

function App() {
const[mynews,setNews]=useState([])
useEffect(()=>{
  fetchData();
},[])




  const fetchData=async()=>{
    let apiData=await fetch('https://newsdata.io/api/1/news?apikey=pub_34506e76bfbca419122dad1b10e148e0063d7&q=news')
    let data=await apiData.json()
   setNews(data.results);
   console.log(data)

  }


  
  return (
    <>
      
    <Header />
    <Time/>
   
    <div className="row">
   {
    mynews&&mynews.map((ele)=>{
      return (<Box link={ele.link} name={ele.article_id} desc={ele.description} date={ele.pubDate} head={ele.title} imgy={ele.image_url}/>)
    })
   }
   </div>
   
    </>
  );
}

export default App;
