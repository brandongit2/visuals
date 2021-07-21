import React from "react"

import Hex from "@web/components/visuals/Hex"

type Visuals = {
  [name: string]: {
    displayName: string
    component: React.ComponentType
  }
}

const visuals: Visuals = {
  hex: {
    displayName: `Hex`,
    component: Hex,
  },
}

export default visuals
