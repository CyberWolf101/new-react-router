//IRRELIVANT :<
import { useLocation, Link } from "react-router-dom"
export default function Breadcrumbs() {
  const location = useLocation()

  let currentLink = ''

  const crumbs = location.pathname.split('/')       //we want to split the string where there is a '/' take note
    .filter(crumb => crumb !== '')                 //if there is a / at the end,there will be an empty space so we want to filter it out
    .map(crumb => {
      currentLink += `/${crumb}`

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })

  return (
    <div className="breadcrumbs">
      {crumbs}
    </div>
  )
}