import { use } from "react";
import { useState } from "react";
import { Help } from "./help";

export const Game=(props)=>{
   
    const [randomNumber,setRandomNumber]=useState(0)
    const [selectedNumber,setSelectedNumber]=useState(0)
    const [val,setVal]=useState("");
    const [score ,setScore]=useState(0)
    const [help,setHelp]=useState(false)


    const handleExit=()=>{
      props.value();}


    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
    const handleChange=(e)=>{
        setSelectedNumber(Number(e.target.value));
    }

    const randomNum=(e)=>{
        e.preventDefault()
        if(!selectedNumber) return alert("select number")
        const newnum=generateRandomNumber(1,7)
        setRandomNumber(newnum);
        if(selectedNumber===newnum) setScore(score+selectedNumber)
        else setScore(score-2)
    }
  
    const handleHelp=()=>{
      setHelp(!help);
    }

    if(help){
      return <Help value={setHelp}/>
    }
    return(
        <>
      
        <div className="flex justify-between gap-10  h-[151px] w-[1280px] mx-20 my16 ">
        <div className="text-7xl h-24 w-24 text-center font-bold  inline" >
        <span className="ml-14"> {score}</span> Score 
      </div>
      
      <div className="mt-10">
      {[1, 2, 3, 4, 5, 6].map((number) => (
        <label  className="list-none font-bold text-4xl h-24 w-12 p-2 shadow-lg rounded-md ml-5 bg-orange-300" key={number}>
          <input
            type="radio"
            name="number"
            value={number}
            checked={selectedNumber === String(number)}
            onChange={handleChange}
          />
          {number}
        </label>
      ))}
      {/* {selectedNumber && <p>You selected: {selectedNumber}</p>} */}
      </div>
    </div>
    
        <div className="h-[500px] w-[250px] mx-[700px] my-[100px] flex items-center flex-col   gap-5 ">
          <p className="font-bold text-red-300 text-2xl">NUMBER SELECTED :{selectedNumber} </p>
        <div  onClick={randomNum} className="h-20 w-32 p-auto content-center item-center bg-yellow-100">
            CLICK TO START
        </div>
        <button className="bg-black ml-3 text-white px-5 py-3" onClick={handleExit}>
            Exit Game
            </button>
            <button className="bg-black ml-3 text-white px-5 py-3" onClick={handleHelp}>
                Help
            </button>
        </div>
        </>
    )
}

