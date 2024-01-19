import { Link } from "react-router-dom";

export default function Header () {


    return(
        <header> 
            < Link to = "/" className = "logo">TechExpress Blog</Link>
        <nav>
      <Link  to = "/loginpage">Login</Link>
      <Link to = "/registerpage">Register</Link>
        </nav> 
         </header>

    );
} 