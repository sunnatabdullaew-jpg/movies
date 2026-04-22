import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar/Sidebar"

const App = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main>
        <Navbar />
        <div className="content">
           <h1>Welcome to Manager</h1>
           <p>This is your dashboard. Select an item from the sidebar.</p>
        </div>
      </main>
    </div>
  )
}

export default App