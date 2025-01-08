import '../App.css'
import { Link } from 'react-router-dom'

type Props = object;

const Header: React.FC<Props> = () => {
    return (
        <header className="bg-background py-8 px-4 shadow-sm">
            <div className="container mx-auto flex justify-between items-center">
                 <Link to="/">
                 <h1 className="text-3xl font-bold text-text-primary">
                    <span className='text-3xl font-bold text-primary'>Xtr</span>
                    ack</h1>
                 </Link>   
                
                <div className="flex space-x-6 ">

                 <Link to="/login" className="border-2 border-primary text-text-primary py-2 px-8 rounded-sm hover:border-primary-dark">
                    <button >
                        Log In
                    </button>
                </Link>   
                
                <Link to="/register" className="bg-primary text-text-primary py-2 px-8 rounded-md hover:bg-primary-dark">
                    <button >
                        Sign Up
                    </button>
                    </Link>
                </div>
             </div>
        </header>
    )
}

export default Header

