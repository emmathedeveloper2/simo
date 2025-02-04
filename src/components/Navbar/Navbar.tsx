import MenuIcon from "./MenuIcon"
import SelectModelDropDown from "./SelectModelDropDown"

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full h-[100px] flex items-center justify-between px-[50px]'>
        <MenuIcon />
        <SelectModelDropDown />
    </nav>
  )
}

export default Navbar