import {FC} from "react"

import Navbar from "@web/components/layouts/MainLayout/Navbar"

const MainLayout: FC = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default MainLayout
