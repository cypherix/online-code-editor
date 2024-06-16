import { HeroEditor } from "./Components/HeroEditor"
import { SideBar } from "./Components/SideBar"


export const App:React.FC = () => {
  return (
    <div className="flex flex-row">
        <SideBar/>
        <HeroEditor/>
    </div>
  )
}

