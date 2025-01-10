import { useState } from "react"

export const Hero=()=>{

    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[data,setData]=useState();

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(data);
        
    }

    return(
        
        <main className="mx-[150px] -mt-10">


            <div className="h-[72px] mt-[50px] ml-[188px] font-extrabold text-5xl " >
                CONTACT US
            </div>
            <p className="text-md font-semibold ml-[188px] h-24 leading-6 w-[975] mt-2">
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR <br /> JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, <br /> OR BY PHONE, EMAIL, OR SOCIAL MEDIA. 
            </p>
             {/* full portion  */}
            <div className="flex ml-[188px] h-[856px] justify-between w-[1161px]  gap-24">   
                    {/* form div  */} 
                    <div className="flex flex-col -mt-5">
                    <div className="flex mt-16 gap-10 text-center justify-between">
                        <button className="bg-black w-[220px] rounded-md  text-white h-9 px-4"> VIA SUPPORT CHAT </button>
                        <button className="bg-black w-[220px] rounded-md text-white h-9 px-4">VIA CALL</button>
                    </div>
                    <div className="border border-black w-[500px] h-[405]  my-4 text-center rounded-sm"> VIA EMAIL FORM </div>
                     <form className="flex flex-col gap-5 pl-5 text-start " onSubmit={handleSubmit}>
                        <label htmlFor="name">Name
                            <input required className=" border border-black w-[472px] " type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
                        </label>
                        <label htmlFor=""> Email
                            <input required className="  border border-black w-[472px] "  type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        </label>
                        <label htmlFor="">Text 
                            <input required className="  border border-black  w-[472px] h-36 " type="text" value={data} onChange={(e)=>{setData(e.target.value)}} />
                        </label>
                        <button type="submit" className="bg-black w-[200px] rounded-md ml-[275px] text-white h-9 p-2"> SUBMIT </button>
                    </form>
                    </div>
                {/* photo div  */}
                <div className="m-2 h-[615px] w-[608px] ">
                <img className="inline object-cover border border-red-200 shadow-md" src="photo2.svg" alt="" />
                </div>
                <div>

                </div>
            </div>
        </main>
        
    )
}