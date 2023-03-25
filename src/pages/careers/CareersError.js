import { Link, useRouteError } from "react-router-dom"

export default function CareersError() {
  const error = useRouteError()         //special hook for errors and we have to specify it in the routes like so " errorElement={<CareersError /> "

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the Homepage</Link>
    </div>
  )
}
