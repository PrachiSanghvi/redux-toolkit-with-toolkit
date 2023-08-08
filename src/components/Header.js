import Button from "./Button";

const Header = () => {
  return (
    <div className='bg-slate-50'>
      <nav className='w-full h-14 bg-indigo-50 flex justify-between px-4 my-10 md:px-4 leading-[3.5rem]'>
        <div className='text-2xl text-indigo-700 font-bold ml-4 leading-[3.5rem]'>Creative Craft</div>
        <ul className='md:flex hidden font-semibold mr-4'>
          <li className='mx-[10px] cursor-pointer'>Home</li>
          <li className='mx-[10px] cursor-pointer'>About</li>
          <li className='mx-[10px] cursor-pointer'>Contact</li>
        </ul>
      </nav>
        <Button/>
    </div>
  );
};

export default Header;