import { useState } from "react";

export default function Form() {

  const [submitted, setSubmitted] = useState(false);  

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true); 
    }, 100);
  };

  if (submitted) {  
    return (
      <div className="text-2xl">
        Thank you! Your submission has been received!
      </div>
    );
  }

  return (
    <>
      <h1 className="text-xl font-bold mb-4">Contact Us</h1>

      <form 
        name="contact-form"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}  
      >

        {/* input must have same name as form */}
        <input type="hidden" name="contact-form" />  

        <p>
          <label>
            Name: 
            <input type="text" name="name" />  
          </label>  
        </p>

        <p>
          <label>
            Email: 
            <input type="email" name="email" />
          </label>
        </p>

        <p>
          <label>
            Message: 
            <textarea name="message"></textarea>  
          </label>
        </p>

        <p>
          <button
            className="bg-teal-600 text-white px-4 py-2 rounded" 
            type="submit"
          >
            Send
          </button>
        </p>

      </form>
    </>
  )
}