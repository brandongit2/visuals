import {NextPage} from "next"
import {useRouter} from "next/dist/client/router"

import MainLayout from "@web/components/layouts/MainLayout"
import visuals from "@web/components/visuals"
import Error404 from "@web/pages/404"

const VisualDisplay: NextPage = () => {
  const router = useRouter()

  if (!router.query.visualName) {
    return <Error404 />
  }

  const visualName = router.query.visualName as string
  const {component: Visual} = visuals[visualName]

  return (
    <MainLayout>
      <Visual />
    </MainLayout>
  )
}

export default VisualDisplay
