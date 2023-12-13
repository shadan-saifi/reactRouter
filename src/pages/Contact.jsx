

function Contact() {

    return(
        <div className="h-[500px] flex flex-row justify-center items-center">
            <div className="bg-blue-100 rounded-md m-4 p-4 leading-loose">
                <h1 className="font-semibold text-2xl">Get in Touch</h1>
                <h2 className="text-xl">Fill in the form to start a conversation:</h2>
                  <br />
                  <form>
                    <div className="bg-blue-200 p-2 my-2 rounded-md "><input type="text" placeholder="Full Name" className="px-1 rounded-md  bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"/></div>
                    <div className="bg-blue-200 p-2 my-2 rounded-md "><input type="text" placeholder="Email Address" className="px-1 rounded-md  bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"/></div>
                    <div className="bg-blue-200 p-2 my-2 rounded-md"><input type="text" placeholder="Phone " className="px-1 rounded-md  bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none" /></div>
                    <button type="submit" className="bg-red-500 rounded-md w-24 left-1/2">Submit</button>
                  </form>

            </div>
            <div className="leading-loose text-[1.25rem] flex flex-col justify-center items-start  m-10 ">
                <h2 className="font-semibold">Contact Us:</h2>
                <div>324, sherlock Street</div>
                <div>Town Square, East Riverfront</div>
                <div>Florida, USA</div>
                <div>Post Code: 253698</div>
            </div>
        </div>
    )
    
}

export default Contact;