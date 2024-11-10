import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import Button from './Button';


const Nav = () => {
  return (
    <div id="nav">
      <div className='logo'>
    <Link href="/">
    <Image
    alt="logo"
    width={100}
    height={50}
    src="/Assests/logo-white.svg" 
  /></Link>
      </div>
<div id='navigation'>
    <Link href="/ToptracerRange"><h4>Toptracer RANGE</h4></Link>
    <Link href="/Adventure"><h4>Adventure Golf</h4></Link>
    <Link href="/GolfLesssons"><h4>Golf Lessons</h4></Link>
    <Link href="/cafe"><h4>Coffee Shop</h4></Link>
    <Link href="/Leagues"><h4>Leagues</h4></Link>
    </div>
      <div id="btn">
     
          <Button text={'BOOK RANGE'}/>
          <Button text={'BOOK GOLF'}/>
      </div>
  </div>
  )
}

export default Nav
