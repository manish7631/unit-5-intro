import { Link } from "react-router-dom"

export const Navbar = () => {
    const nav = [{title: "Home", to: "/"},
    
 
]
    return (
        <div>
           {nav.map((e, i) => (
               <Link to={e.to} key = {i}>{e.title}</Link>
           )

           )}
        </div>
    )
}