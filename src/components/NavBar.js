import { NavLink } from "react-router-dom";

function NavBar (){
    return(
              <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="container-fluid ">
                    <NavLink className="navbar-brand" to="/">
                      <img src="https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg" className=" place-self-start object-fill w-50 " alt="logo" />
                    </NavLink>
                    <button className="navbar-toggler place-self-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </li>
                      </ul>
                      <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                      </form>

                    </div>
                  </div>
                </nav>

                          
              </div>
    )
}


export default NavBar;