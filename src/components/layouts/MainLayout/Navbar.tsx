import Link from "next/link"
import {FC} from "react"

import visuals from "@web/components/visuals"

const Navbar: FC = () => {
  return (
    <nav>
      {Object.entries(visuals).map(([name, visual]) => (
        <Link href={`/${name}`} key={name}>
          {visual.displayName}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
