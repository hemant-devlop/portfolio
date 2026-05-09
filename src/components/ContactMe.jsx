import React from 'react'
// import caction from './utils/contactme';
import { useActionState } from 'react';

const caction =()=>{}

function SubmitButton({pending}) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full cursor-pointer rounded-lg bg-black px-4 py-2 text-white disabled:opacity-50 font"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}

const ContactMe = () => {
     const [state,formAction,pending] = useActionState(caction,null)
  return (
   <div className="mx-auto max-w-lg p-6">
      <h1 className="mb-6 text-3xl text-center font">Contact Me</h1>

      <form action={formAction} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full rounded border border-black p-2"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full rounded border border-black p-2 my-2"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          className="w-full rounded border border-black p-2 resize-none"
        />

        <SubmitButton pending={pending} />

        {state && (
          <p className="text-sm text-red-500">{state}</p>
        )}

        {pending && (
          <p className="text-sm text-green-600">Loading <span className="animation-pluse">...</span></p>
        )}
      </form>
    </div>
  )
}

export default ContactMe