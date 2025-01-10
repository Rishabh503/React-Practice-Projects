import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/navbar'
import {FiSearch} from "react-icons/fi" 
import {AiFillPlusCircle} from "react-icons/ai"
import { CgProfile } from "react-icons/cg";
import { MdEdit,MdDelete } from "react-icons/md";
///firewall 
import { collection,getDocs } from 'firebase/firestore'
import { db } from './config/firbase'
import { ContactCard } from './components/Contact'
function App() {
  const [contacts, setContacts] = useState([])

  useEffect(()=>{
      const getContacts=async()=>{
        try {
            const contactsRef=collection(db,"contacts");
            const contactsSS=await getDocs(contactsRef);
            const contactLists=contactsSS.docs.map((doc)=>{
              return{
                id:doc.id,
                ...doc.data(),
              };
            });
            setContacts(contactLists)
            console.log(contactLists);
        } catch (error) {
          console.log(error)
        }
      };

      getContacts();
  },[])

  return (
    <div className='mx-auto max-w-[370px] px-4'>
     <NavBar/>
    <div className="flex gap-2">
    <div className='flex flex-grow relative items-center'>
      <FiSearch className='text-white text-3xl  absolute'/>
      <input className='rounded-md border h-10 border-white bg-transparent flex-grow'  type="text" name="" id="" />
     </div>
     <AiFillPlusCircle className="text-5xl cursor-pointer text-white "/>
    </div>
    <div className='mt-3 flex-col flex gap-2'>
      {
        contacts.map((contact)=>(
          <ContactCard key={contact.id} contact={contact}/>
        ))
      }
    </div>
    </div>
  )
}

export default App
