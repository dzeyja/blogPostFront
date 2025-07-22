import { Link } from 'react-router-dom'
import cls from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className='container'>
        <h1 className='hell'>Home Page</h1>
        <Link className='link' to={'/login'}>Login</Link>
        <Link className='link' to={'/register'}>Register</Link>
    </div>
  )
}
