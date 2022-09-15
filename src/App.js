import Friends from "./pages/Friends";
import Restaraunts from "./pages/Restaurant";
import Tab from "./Tab";

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <App />
      break
      case "/restaraunts":
        component = <Restaraunts />
        break
        case "/friends":
          component = <Friends />
          break
  }
  return (
  <>
  <Tab />
  {component}
  </>
  )
}


export default App