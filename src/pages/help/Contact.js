import { Form, redirect, useActionData } from "react-router-dom"  //we import all these from react rounter dom

export default function Contact() {
  const data = useActionData()  //if we want to use data we return from our request  we import the function useActionData() and in this case we are using it to ouput data below

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>

        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  )
}
//at the end of the day we have to register this function to the route else it wouldn't work (action={contactAction})
export const contactAction = async ({ request }) => {
  console.log(request)
  const data = await request.formData()           //formData is a method that gets us the form data

  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }

  console.log(submission)

  // send your post request

  if (submission.message.length < 10) {
    return { error: 'Message must be over 10 chars long.' }
  }
  //note what have to return something
  // redirect from react-router like navigate
  return redirect('/')
}