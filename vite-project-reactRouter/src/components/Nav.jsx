import { Link } from "react-router-dom" //to create a Link, import the Link component from 'react-router-dom' and set the 'to' prop to the desired path. The content of the Link component is what the user clicks to navigate.

//The main parts of a React Router are Routes and Links. 'Routes' define what components are to be displayed when a certain path is visited. 'Links' provide user-friendly ways to navigate to these paths.

const Nav = () => {
  return (
    <div className="nav-links">
      <Link to="/"> Home </Link>
      <Link to="/componentA"> Component A </Link>
      <Link to="/componentB"> Component B </Link>
    </div>
  )
}

export default Nav

//Notice how our "Home" Link just has a "/" with no additional slug at the end. This is because Home will be our Landing Page. The name of the components, and their content may change, but keeping "/" as the landing page is very common.
