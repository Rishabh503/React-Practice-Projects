export const Hero=()=>{

    return(
        <>
            <main className="flex  w-[1125px] h-[613px] mt-[152px] ml-[457px]  pb-10  " >
                {/* making the left one  */}
                     <div className=" w-[595px] h-[613px] flex flex-col gap-9">
                        <h1 className=" text-[108px] max-h-[306px] font-extrabold leading-[102px]">
                            YOUR FEET DESERVE THE BEST
                        </h1>
                        <p className="max-w-[404px] max-h-[91px] leading-6 font-semibold">
                        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                        </p>
                        <div className="flex gap-10 ">
                            <button className="border font-semibold text-white bg-red-700 px-4 py-2 text-[24px]">
                                SHOP NOW
                             </button>
                                <button className="border border-slate-950 font-semibold text-grey-200 bg-white px-4 py-2 text-[24px]">
                                    CATEGORY 
                                </button>
                        </div>
                        <div className="flex  flex-col gap-4">
                            <p>
                                    Also Avialble On
                            </p>
                            <p className="flex gap-4 ">
                                <img  src="flipkart.png" alt="" />
                                <img  src="amazon.png" alt="" />
                         </p>
                        </div>
            </div>
            {/* making the right one  */}
            <div>
                    <img src="shoe_image.png" 
                    className="max-w-[530px]  max-h-[487]"
                    alt="" />
            </div>
            </main>
           
        </>
    )
}