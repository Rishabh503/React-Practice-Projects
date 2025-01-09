export const NavBar=()=>{
    return(
        <>  
            <nav className="w-[1440px] h-[72px] flex mx-auto justify-between gap-24 border">
                <div  className="h-[76px] w-[42.75] mt-4 ml-[85px]">
                    <img src="brand_logo.png  " alt="" />
                </div>
              
                    <ul className="text-[poppins] text-[16px] font-[600] my-6 flex gap-6 ">
                    <li >  MENU </li>
                    <li>LOCATION</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    </ul>
                <button className="bg-red-600 text-white font-semibold w-[76px] h-8 mt-5 mr-[85px] py-[6px] px-4   justify-center">
                    Login
                </button>
              
            </nav>
            
        </>
    )
}