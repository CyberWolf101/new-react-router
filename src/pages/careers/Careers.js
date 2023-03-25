import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
  const careers = useLoaderData()    //this serves as our useEffect and state cus all the data will be stored in the const too

  return (
    <div className="careers">
      {careers.map(career => (
        <Link to={career.id.toString()} key={career.id}>    {/*we don't need to specify the path as /careers/${career.id} cus we are inside the careers layout already also there is another method, we could just change tge id to string and it will work (career.id.toString()) */}
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

// data loader
export const careersLoader = async () => {           //so we export it here so that we can associate it with a route
  const res = await fetch(' http://localhost:4000/careers') //so basically we export 2 functions from this file

  if (!res.ok) {
    throw Error('Could not fetch the list of careers')
  }

  return res.json()
}

//json-server -p 4000 -w ./data/db.json