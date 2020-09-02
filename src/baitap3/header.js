import React from "react";

export default function Header() {
    return (
        // <nav classname="navbar navbar-expand-md navbar-dark bg-dark">
        //     <div classname="container-fluid">
        //         <a href="#" classname="navbar-brand">CyberSoft</a>
        //         <button classname="navbar-toggler" data-toggle="collapse" data-target="#myMenu">
        //             <span classname="navbar-toggler-icon">
        //             </span></button>
        //         <div classname="collapse navbar-collapse" id="myMenu">
        //             <ul classname="navbar-nav ml-auto">
        //                 <li classname="nav-item">
        //                     <a href="#" classname="nav-link active">Home</a>
        //                 </li>
        //                 <li classname="nav-item">
        //                     <a href="#" classname="nav-link">News</a>
        //                 </li>
        //                 <li classname="nav-item dropdown">
        //                     <a href="#" classname="nav-link" data-toggle="dropdown">Products</a>
        //                     <div classname="dropdown-menu">
        //                         <a href="#" classname="dropdown-item">Smarphone</a>
        //                         <a href="#" classname="dropdown-item">Laptop</a>
        //                     </div>
        //                 </li>
        //                 <li classname="nav-item">
        //                     <a href="#" classname="nav-link">Forum</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">CyberSoft</a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#myMenu">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="myMenu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">News</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link" data-toggle="dropdown">Products</a>
                            <div className="dropdown-menu">
                                <a href="#" className="dropdown-item">Smarphone</a>
                                <a href="#" className="dropdown-item">Laptop</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Forum</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}