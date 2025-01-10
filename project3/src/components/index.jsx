import { useState } from "react"
import { Game } from "./game";

export const Front=()=>{
    const[game,setGame]=useState(false)
    const handleGame=()=>{
        setGame(!game);
    }

    if(game){
        return(
            <Game value={handleGame}/>
        )
    }
   

    return(
        <>
            <main className="flex bg-slate-200 w-[1300px] h-[552px] gap-2 my-[150px] ml-[200px] ">
          
            <div className="w-[650px] h-[522px]">
                <img src="dices.png" alt="" />
            </div>
            <div className="my-[167px] flex flex-col gap-2">
                <h1 className="font-bold text-[96px] leading-[144px]">
                    DICE GAME
                </h1>
            <button className="bg-black ml-3 text-white px-5 py-3" onClick={handleGame}>
                LETS PLAY
            </button>
            </div>
           
            </main>
        </>
    )
}