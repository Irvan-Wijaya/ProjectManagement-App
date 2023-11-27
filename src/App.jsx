import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar/>
      <NewProject/>
    </main>
  );
}

export default App;


// =====================================================================================================
// Personal Tailwind note 
/**
 * h-screen   : make sure that will takes up all the screen height (entire available height)
 * my-8       : add margin (y means vertical axis 2 rem) | one spacing unit equal 0.25 rem
 */