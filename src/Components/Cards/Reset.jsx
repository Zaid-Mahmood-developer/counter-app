import {ResetIcon} from "@radix-ui/react-icons"
export default function Reset({setCount}) {
  const resetCount = () =>{
    setCount(0)
  }
  return (
    <main>
        <button className="reset-btn"><ResetIcon onClick= {resetCount} className="reset-btn-icon"/></button>        
    </main>
  )
}
