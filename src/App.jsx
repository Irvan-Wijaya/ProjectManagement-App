import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/noProjectSelected";
import NewProject from "./components/NewProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined, // undefined means that doing nothing (no project yet or no selected)
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null, // null means that adding new project
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onCancel = {handleCancelAddProject}/>;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {content}
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
