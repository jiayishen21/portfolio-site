import { Route, Routes, useLocation } from 'react-router-dom'
import About from './About'

import { AnimatePresence } from 'framer-motion'
import Projects from "./Projects"

interface Props {
  curProject: number
  setCurProject: React.Dispatch<React.SetStateAction<number>>

  onMenu: boolean
  setOnMenu: React.Dispatch<React.SetStateAction<boolean>>

  mouseDown: number | null
  setMouseDown: React.Dispatch<React.SetStateAction<number | null>>
  prevPercentage: number
  setPrevPercentage: React.Dispatch<React.SetStateAction<number>>
  percentage: number
  setPercentage: React.Dispatch<React.SetStateAction<number>>

  switchPage: number
  setSwitchPage: React.Dispatch<React.SetStateAction<number>>

  page: string

  initialLoad: boolean
}

const AnimatedRoutes: React.FC<Props> = (props: Props) => {
  const location = useLocation()

  return (
    <>
      <AnimatePresence>
        <Routes
          location={location}
          key={location.pathname}
        >
          <Route
            path='/'
            element={<Projects
              curProject={props.curProject}
              setCurProject={props.setCurProject}

              onMenu={props.onMenu}
              setOnMenu={props.setOnMenu}

              percentage={props.percentage}
              setPercentage={props.setPercentage}
              
              mouseDown={props.mouseDown}
              setMouseDown={props.setMouseDown}
              prevPercentage={props.prevPercentage}
              setPrevPercentage={props.setPrevPercentage}

              switchPage={props.switchPage}
              setSwitchPage={props.setSwitchPage}

              page={props.page}
            />}
          />
          <Route
            path='/about'
            element={<About 
              switchPage={props.switchPage}
              initialLoad={props.initialLoad}
            />}
          />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default AnimatedRoutes

