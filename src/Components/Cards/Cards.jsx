import Title from "./Title";
import Count from "./Count";
import Reset from "./Reset";
import CountButtons from "./CountButtons";
import { useState } from "react";
const Cards = () => {
  const [count , setCount] = useState(0);
  return (
    <main className="card">
      <Title/>
      <Count count = {count}/>
      <Reset setCount = {setCount}/>
      <CountButtons setCount = {setCount} count = {count}/>
    </main>
  )
}

export default Cards
