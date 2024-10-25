import React from "react";
import illust from "../../assets/Work_7.png";
import { FaFacebookSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-fifth px-[15vw] py-[8vh]">
      <div className="bg-transparent grid grid-cols-3 gap-5">
        <div className="col-span-1 px-4 py-4 border shadow-lg rounded-lg">
          <img src={illust} className="-mt-2" alt="" />
          <div className="px-4 mt-5">
            <h1 className="font-extrabold text-xl">Address</h1>
            <p className="mt-2 tracking-wide">
              Majdair EidGah, Narayanganj, Bangladesh
            </p>
          </div>
          <div className="px-4 mt-10">
            <h1 className="font-extrabold text-xl">Phone</h1>
            <p className="mt-2 tracking-wide text-lg">{`(+880) 1621754583`}</p>
          </div>
          <div className="px-4 mt-10">
            <h1 className="font-extrabold text-xl">Email</h1>
            <p className="mt-2 tracking-wide text-lg">mahisur.rahman.001@gmail.com</p>
          </div>
          <div className="px-4 mt-10">
            <h1 className="font-extrabold text-xl">Website</h1>
            <div className="flex items-center justify-between mt-2">
              <p className="tracking-wide text-lg">https://mahisur.com</p>
              <p className="text-fourth font-extrabold duration-200 hover:text-seventh hover:cursor-pointer hover:duration-200">
                Visit Site
              </p>
            </div>
          </div>
          <div className="px-4 mt-10">
            <h1 className="font-extrabold text-xl">Follow Us</h1>
            <div className="mt-4 pb-5 text-2xl flex items-center gap-10">
              <FaFacebookSquare className="text-orange-600 duration-200 hover:text-seventh hover:cursor-pointer hover:duration-200 hover:scale-110"></FaFacebookSquare>
              <ImInstagram className="text-orange-600 duration-200 hover:text-seventh hover:cursor-pointer hover:duration-200 hover:scale-110"></ImInstagram>
              <FaLinkedin className="text-orange-600 duration-200 hover:text-seventh hover:cursor-pointer hover:duration-200 hover:scale-110"></FaLinkedin>
            </div>
          </div>
        </div>
        <div className="col-span-2 px-10 py-4 border shadow-lg rounded-lg">
          <h1 className="mt-5 text-2xl font-extrabold tracking-wider">
            How can we improve our experience?{" "}
          </h1>
          <form className="mt-5 py-5">
            <div className="flex items-center justify-between gap-5">
              <div className="flex flex-col w-full">
                <label className="font-extrabold tracking-wide" htmlFor="name">
                  Name
                </label>
                <input
                  className="mt-2 text-xl w-full py-2 px-2 border border-fourth rounded-[6px] focus:outline-seventh"
                  type="text"
                  name="name"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="font-extrabold tracking-wide" htmlFor="name">
                  Email
                </label>
                <input
                  className="mt-2 text-xl w-full py-2 px-2 border border-fourth rounded-[6px] focus:outline-seventh"
                  type="text"
                  name="name"
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="flex flex-col w-full">
                <label className="font-extrabold tracking-wide" htmlFor="name">
                  Subject
                </label>
                <input
                  className="mt-2 text-xl w-full py-2 px-2 border border-fourth rounded-[6px] focus:outline-seventh"
                  type="text"
                  name="name"
                />
              </div>
            </div>
            <div className="mt-5">
              <label className="font-extrabold tracking-wide" htmlFor="name">
                Description
              </label>
              <textarea
                className="w-full border border-fourth h-[20vh] mt-2 rounded-[6px] px-2 py-2 focus:outline-seventh"
                name="Description"
                id=""
              ></textarea>
            </div>
            <div className="mt-5">
              <input
                className="px-4 py-2 bg-fourth rounded-[4px] duration-200 text-white bg-orange-600 font-bold hover:duration-200 hover:scale-110 hover:cursor-pointer"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;