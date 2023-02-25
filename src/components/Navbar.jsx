
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ShoppingCart from '../components/ShoppinCart/ShoppinCart'
// import { useState } from 'react'


const NavBar = () => {

  const [userLogin, setUserLogin] = useState(true);

  //  if (placeholder == ''){
  //    setPlaceHolder('Hi, What can we help you find? ') 
  //  }
  //  else {
  //    setPlaceHolder(`Hi, (user.name) What can we help you find?`)

  //  }

  // const users = [
  //   {name:"carlos"}
  // ] 

  //? obj with path links and list name
  let Links = [
    { name: "HOME", link: "/" },
    { name: "PRODUCTS", link: "/products/:category", },
    { name: "REGISTER", link: "/UserRegister" },
    { name: "LOGIN", link: "/UserLogin" },
    // { name: "CART", link: "/cart" },

  ]



  let [open, setOpen] = useState(false);

  return (


    <div className='  w-full z-40'>
      <nav className='md:flex bg-gray-100  py-6 items-center justify-around p-5 flex-wrap'>
        <div className='logo-container font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-indigo-300 gap-2 ml-0.5 text-2xl md:items-center m-2  flex-1'>
          <Link as={Link} to={'/'} alt='logo'>
            <span className='text-3x1 text-slate-600'><ion-icon name="pricetags-outline"></ion-icon> </span>
            <h1 className='flex flex-col  text-2xl text-slate-600'>AVE PASEOS<hr /> <span className='text-sm text-indigo-700'>BOUTIQUE</span></h1>
          </Link>
          <br />

        </div>
        <div onClick={() => setOpen(!open)} className=' text-slate-600 text-2xl  cursor-pointer  items-center flex  pl-2   w-20 hover:text-indigo-500 ring-indigo-500 transiton ease-in duration-300  hover:ring-2 rign-indigo-500 rounded-sm p-1 '>
          <ion-icon className='w-28  text-2xl' name={open ? 'close' : 'menu'}></ion-icon><span className='items-center  text-xl'>Menu</span>
        </div>

        <div onChange={() => setUserLogin(false)} className='search-container items-center flex align-middle drop-shadow-md  m-2  justify-center flex-1'>
          <input className='w-80 h-11 rounded-l-lg p-4 text-xl flex-1 ' type="search" name='searchbtn' placeholder={userLogin ? 'what can we help you find' : `Hi, carlos what can we help you find`} ></input>
          <button ><span id="searchIcon" className='text-2xl  py-2 bg-white  rounded-r-lg '><ion-icon name="search-outline"></ion-icon></span></button>
        </div>

        <div className={` rounded-lg md:flex  text-center align-middle w-12  m-2 cursor-pointer flex-1`} >

          <Link as={Link} to="/cart"> <ShoppingCart />  <Link />



            <span className='m-2 text-slate-600 underline hover:underline-offset-4  text-2xl  hover:text-indigo-500 ring-indigo-500 transiton ease-in duration-300  hover:ring-2 rign-indigo-500 rounded-sm p-1'>Cart</span>
          </Link>
        </div>
        <div className='menu-container md:flex  items-center ml-5 g'>
          <ul onClick={() => setOpen(!open)} className='menu-ul  md:flex-row  md:flex text-xl  z-40 absolute md:static bg-gray-100 md:pb-0 pb-12 md:z-auto  left-0 w-full md:pl0- pl-9  duration-500 ease-in'>
            {
              Links && Links.map(link => (
                <li key={link.name} className={`md:ml-8 text-teal-50 md:my-0 my-7 ${open ? 'show' : 'hidden'} `}>
                  <Link className=' text-slate-600 hover:text-indigo-500 ring-indigo-500 transiton ease-in duration-300  hover:ring-2 rign-indigo-500 rounded-sm p-1 ' as={Link} to={link.link}> {link.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>


      </nav>
    </div>



  )
}

export default NavBar