import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/noProjectSelected";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";
import illustration from "./assets/ProjectStages.gif"

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined, // undefined means that doing nothing (no project yet or no selected)
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prev) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prev.selectedProjectId,
        id: taskId,
      };

      return {
        ...prev,
        tasks: [newTask, ...prev.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

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

  function handleAddProject(projectData) {
    setProjectState((prev) => {
      const newProject = {
        // for simpliciy can use spread operator than declacre all attribute
        ...projectData,
        id: Math.random(),
        // good enough for dummy project when id use Math.random()
      };

      return {
        ...prev,
        projects: [...prev.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  // used for get projectSelected by id from Sidebar
  function handleSelectProject(id) {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  }

  // function to find project by id data from function handleSelectProject
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  // logic visibility
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        projects={projectState.projects}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        selectedProjectID={projectState.selectedProjectId}
      />
      {content}
      <div className="w-[35rem] mt-16">
        <img src={illustration} alt="" />
      </div>
    </main>
  );
}

export default App;

// =====================================================================================================
// Personal Tailwind note
/**
 * h-screen   : make sure that will takes up all the screen height (entire available height)
 * my-8       : add margin (y means vertical axis 2 rem) | one spacing unit equal 0.25 rem
 *
 * =====================================================================================================
 * function handleAddProject Flow
 * copy all previous data, and then update the project array. then update the project without
 * losing any prev project, therefore copying all the old project with spread operation.
 *
 */
