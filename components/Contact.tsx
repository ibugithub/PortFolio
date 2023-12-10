'use client'

const Contact = () => {

  return (
    <>
      <form className="flex flex-col gap-4 justify-center items-center mt-32 text-black ff" method="POST" action="https://formspree.io/f/moqzkwvy">
        <div className="max-w-md text-center flex flex-col gap-4">
          <div className="text-emerald-500 text-5xl font-bold"><h3> Send me a message !</h3></div>
          <div className="text-emerald-900 text-2xl">Got a question or proposal, or just want to say hello ? Go ahead.</div>
        </div>

        <div className="w-5/6 max-w-[600px]">
          <div className="flex justify-between pt-12 ">

            <div className="flex flex-col w-2/5">
              <label className="text-emerald-900 "  htmlFor="name" >Your Name:</label>
              <input  className="border-green-500 outline-none " type="text" id="name" name='name' placeholder="Enter Your Name"
              />
            </div>

            <div className="flex flex-col w-2/5">
              <label className="text-emerald-900" htmlFor="email">Email Address:</label>
              <input className="border-green-500" type="text" id="email" name='email' placeholder="Enter Your Email Address" />
            </div>

          </div>

          <div className="flex flex-col pt-5">
            <label className="text-emerald-900" htmlFor="message">Your Message:</label>
            <textarea className="border-green-500" id="message" placeholder="Hi, I think we need a webApp for our products at Company X. How soon can you hop on to discuss this?" name="message" />
          </div>

        </div>

        <button type="submit" className="border border-green-500 px-14 py-2 mt-10 text-emerald-900">
          Send
        </button>

      </form>
    </>
  );
}

export default Contact;