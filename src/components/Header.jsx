import Home from '../pages/Home'
import { Link, NavLink } from 'react-router-dom'
function Header() {




    return (
        <header className='shadow sticky z-50 top-0 bg-white'>
            <nav className='w-full  rounded  relative  '>
                <div className='flex justify-between items-center'>
                    <Link to='/' >
                        <img className='max-w-[110px] max-h-[110px] rounded ' src="../src/images/logoimage.png" alt="logo" />
                    </Link>
                    <div className='w-48'>
                        <Link to='#' className=' rounded border border-black px-3 py-1 '>Log In</Link>
                        <Link to='#' className='px-3 py-1 bg-red-400 rounded mx-2'>Get Started</Link>
                    </div>
                </div>
                <div className=' absolute top-1/2 sm:left-1/2 left-64 transform -translate-x-1/2 -translate-y-1/2 '>
                    <ul className='flex justify-center items-center'>
                        <li className='p-1 m-1 md:text-xl font-semibold'>
                            <NavLink to='/'
                                
                                className={({ isActive, isTransitioning, isPending }) => [
                                    isActive ? 'bg-slate-300 p-2 rounded-xl hover:bg-slate-400' : '',
                                    isTransitioning ? 'bg-gray-400 p-2 rounded-xl hover:bg-slate-400' : '',
                                    isPending ? 'bg-red-200 p-2 rounded-xl hover:bg-slate-400' : '',
                                ].join(' ')} >
                                Home
                            </NavLink>

                        </li>
                        <li className='p-1 m-1 md:text-xl font-semibold'>
                            <NavLink to='/about'
                               className={({ isActive, isTransitioning, isPending }) => [
                                isActive ? 'bg-slate-300 p-2 rounded-xl hover:bg-slate-400' : '',
                                isTransitioning ? 'bg-gray-400 p-2 rounded-xl hover:bg-slate-400' : '',
                                isPending ? 'bg-red-200 p-2 rounded-xl hover:bg-slate-400' : '',
                            ].join(' ')} >
                                About
                            </NavLink>

                        </li>
                        <li className='p-1 m-1 md:text-xl font-semibold'>
                            <NavLink to='/contact'
                               className={({ isActive, isTransitioning, isPending }) => [
                                isActive ? 'bg-slate-300 p-2 rounded-xl hover:bg-slate-400' : '',
                                isTransitioning ? 'bg-gray-400 p-2 rounded-xl hover:bg-slate-400' : '',
                                isPending ? 'bg-red-200 p-2 rounded-xl hover:bg-slate-400' : '',
                            ].join(' ')} >
                                Contact
                            </NavLink>

                        </li>
                        <li className=' md:text-xl p-1 m-1 font-semibold'>
                            <NavLink to='/github'
                              className={({ isActive, isTransitioning, isPending }) => [
                                isActive ? 'bg-slate-300 p-2 rounded-xl hover:bg-slate-400' : '',
                                isTransitioning ? 'bg-gray-400 p-2 rounded-xl hover:bg-slate-400' : '',
                                isPending ? 'bg-red-200 p-2 rounded-xl hover:bg-slate-400' : '',
                            ].join(' ')} >
                                GitHub
                            </NavLink>

                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header