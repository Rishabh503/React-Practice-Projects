import { CgProfile } from "react-icons/cg"
import { MdDelete, MdEdit } from "react-icons/md"

export const ContactCard=({contact})=>{
    return(
        <div  className="flex justify-between rounded-lg  bg-yellow items-center" key={contact.id}> 
                     <div  className='flex gap-2'>
                     <CgProfile className='text-4xl text-orange '/>
                      <div className='flex flex-col mx-auto'>
                      <p className='text-xl'>{contact.name}</p>
                      <p>{contact.email}</p>
                      </div>
                      <div className='flex p-2 text-orange gap-1 text-3xl'>
                      <MdEdit />
                      <MdDelete/>

                      </div>
                     </div>
                  </div>
                
    )
}

