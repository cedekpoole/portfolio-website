'use client'

import {MotionDiv} from "./MotionDiv"
import { useForm } from "react-hook-form";


export const ContactForm = () => {
    const inputStyle = `w-full rounded-lg bg-gray-20 px-5 py-3 mt-4 placeholder-gray-300`;

    // Set up form
    const {
      register,
      trigger,
      formState: { errors },
    } = useForm();
  
    // Set up form submission
    const onSubmit = async (e: any) => {
      const isValid = await trigger();
      if (!isValid) {
        e.preventDefault();
      }
    };
    return (
    <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/cameron.edek.poole@gmail.com"
              method="POST"
            >
              <input
                className={inputStyle}
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {/* Add error handling e.g. if user does not input name etc */}
              {errors.name && (
                <p className="mt-1 text-primary-100">
                  {errors.name.type === "required" && "Name is required!"}
                </p>
              )}
              {errors.name && (
                <p className="mt-1 text-primary-100">
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters"}
                </p>
              )}

              <input
                className={inputStyle}
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-100">
                  {errors.email.type === "required" && "Email is required!"}
                </p>
              )}
              {errors.email && (
                <p className="mt-1 text-primary-100">
                  {errors.email.type === "pattern" &&
                    "Please insert a valid email!"}
                </p>
              )}

              <textarea
                className={inputStyle}
                rows={5}
                cols={50}
                placeholder="Message"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-100">
                  {errors.message.type === "required" && "Message is required!"}
                </p>
              )}
              {errors.message && (
                <p className="mt-1 text-primary-100">
                  {errors.message.type === "maxLength" &&
                    "Max message length is 2000 characters"}
                </p>
              )}
              <button
                type="submit"
                className="float-right mt-5 rounded-lg bg-gray-100 px-20 py-3 transition duration-500 hover:bg-primary-100 hover:text-white"
              >
                Submit
              </button>
            </form>
    )
}