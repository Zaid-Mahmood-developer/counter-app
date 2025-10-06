import { PlusIcon , MinusIcon } from "@radix-ui/react-icons"
export default function CountButtons({setCount , count}) {
 const plusCountFunction = () =>{
  setCount(count + 1 )
 }
 const minusCountFunction = () =>{
  setCount(count - 1 )
 }
  return (
    <main className="button-container">
          <button onClick={minusCountFunction} className="count-btn"><MinusIcon className="count-btn-icon"/></button>
          <button onClick={plusCountFunction} className="count-btn"><PlusIcon className="count-btn-icon"/></button>
    </main>
  )
}
