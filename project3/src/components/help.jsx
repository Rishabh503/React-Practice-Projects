export const Help=(props)=>{
    const handleHelp2=()=>{
        props.value();
    }
    return(
        <>
        <h1>
            RULES HERE 
        </h1>

        <button className="bg-black ml-3 text-white px-5 py-3" onClick={handleHelp2}>
                Help
            </button>
        </>
    )
}