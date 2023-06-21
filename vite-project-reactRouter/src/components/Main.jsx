import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"

// Routes are defined using the Route component, which is also imported from 'react-router-dom'. Each Route must be wrapped inside a Routes component. The 'path' prop defines the URL path, and the 'element' prop specifies the component that should be rendered for that path.

//All Routes (singular) need to be wrapped in a Routes (plural) tag

const Main = () => {
  const userName = "userName1"
  const dayOfWeek = "Friday"

  return (
    <div className="routes-container">
      <Routes>
        <Route
          path="/"
          element={<Home userName={userName} dayOfWeek={dayOfWeek} />}
        />
        <Route path="/componentA" element={<ComponentA />} />
        <Route path="/componentB" element={<ComponentB />} />
      </Routes>
    </div>
  )
}

export default Main
