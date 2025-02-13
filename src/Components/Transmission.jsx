import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Transmission = () => {
  const [email, setEmail] = useState("");

  const sendMail = async (e) => {
    e.preventDefault();

    if (email == "") {
      toast("Invalid Mail");
      return;
    }
    fetch('https://139-59-5-56.nip.io:3443/contactMail', {
      method: 'POST',
      body: JSON.stringify({
        name: "Transmission Mail",
        mail: email,
        msg: "Mail for transmission"
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => { })
      .then((data) => {
        toast.success('Mail Send Successfully');
      })
      .catch((err) => {
        console.log(err.message);
        toast("Error in sending mail");
      });
  };

  return (
    <>
    <ToastContainer
    position="top-center"
    autoClose={2000}
    theme="dark"
    pauseOnHover
  />
    <div
      style={{
        background:
          "radial-gradient(50%_50%_at_50%_50%,_rgba(18,_213,_118,_0.24),_rgba(0,_0,_0,_0))",
      }}
      className="lg:py-[40px] lg:px-[80px] md:p-[70px] p-[50px] bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-600 flex lg:justify-between lg:flex-row flex-col items-center    "
    >
      <div className=" md:text-[48px] md:leading-[110%] text-3xl text-center whitespace-break-spaces w-fit font-sans font-bold leading-[110%] text-black">
        Receive Transmissions
      </div>
      <form onSubmit={sendMail}>
      <div className="py-8">
        <button type="button" className="email-button rounded-3xl bg-gray-500 text-white  flex items-center justiafy-between md:w-[620px] md:h-[92px] w-[300px]   ">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent py-7 px-9 border-none outline-none w-full h-full placeholder:email-text  placeholder:font-light  placeholder:font-sans  placeholder:text-2xl  placeholder:leading-[110%]"
            placeholder="Your email"
            id=""
          />

          <button type="submit" className="mr-[50px] px-5 py-3 border rounded-full">
            <span className="arrow font-light font-sans text-2xl leading-[110%] ">
              &gt;
            </span>
          </button>
        </button>
      </div>
      </form>
    </div>
    </>
  );
};

export default Transmission