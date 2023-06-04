import {BsArrowLeftShort} from 'react-icons/bs'
export default function SideBar() {
    return (
      <>
      <div className='bg-violet-950 h-screen p-5 pt-8 w-72 text-white relative'>
        <BsArrowLeftShort className='bg-white text-violet-950 rounded-full text-3xl absolute -right-3 top-9 
        border border-violet-950 cursor-pointer'/>
      </div>
      </>
    )
  }