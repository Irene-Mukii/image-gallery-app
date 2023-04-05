import { useMemo, useState } from "react";
import {Link, useLocation } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext";
import { useFirestoreContext } from "../context/FirestoreContext";

const LogIn = () => {
    const { login, currentUser } = useAuthContext();
    return(
        !currentUser && <button type="button" className="btn btn-warning" onClick={login}>Login</button>
    );
};

const LogOut = () => {
    const { logout, currentUser } = useAuthContext();

    return (
        !!currentUser && <button type="button" className="btn btn-danger" onClick={logout}>Logout</button>
    );
};

function Navigation(){
    const { currentUser} = useAuthContext();
    const { pathname } = useLocation();
    return(
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                {currentUser && <Link className={`nav-link ${pathname === '/stockImages' ? 'active' : ''}`} aria-current="page" to="/stockImages">My Stock Images</Link>}
            </li>
        </ul>
    )
}
function SearchForm (){
    const [text, setText] = useState(null);
    const { filterItems: filter} = useFirestoreContext();
    const handleOnChange = e => {
        setText(e.target.value);
        filter(e.target.value)
    }
    const handleOnSubmit = e => {
        e.preventDefault();
        console.log(`searching ${text}`)
        filter(text)
    }
    return (
        <form className="d-flex" role="search" onSubmit={handleOnSubmit}>
            <input 
                onChange={handleOnChange}
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
};

function Dropdown (){
    const { currentUser } = useAuthContext();

    const username = useMemo(() => {
        if (currentUser){
            return currentUser.displayName
        } else return "Profile"
    },[currentUser]);
    
    const avatar = useMemo(() => {
    return !!currentUser ?
    <img className="avatar" src={currentUser?.photoURL} alt={currentUser?.displayName } width="34" height="34"/> :
        "Login"
    }, [currentUser]);


    return(
        <ul className="navbar-nav mb-2 mb-lg-0">
        {" "}
            <li className="nav-item dropdown">
                <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    {avatar}
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {currentUser && (
                        <li>
                        <Link className="dropdown-item text-center" to="/profile">
                            {username}
                        </Link>
                        <li><hr className="dropdown divider"></hr></li>
                        </li>
                    )}
                    <div className="d-flex justify-content-center">
                        <LogIn/>
                        <LogOut/>
                    </div>
                </ul>
            </li>
        </ul>

    )
};


export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> ⚡ Firestock</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Navigation />
            <SearchForm />
            <Dropdown />
        </div>
        </div>
      </nav>
    )
};