import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google icon from react-icons
import { FaApple } from "react-icons/fa"; // Apple icon from react-icons
import { Button } from "@material-tailwind/react";

export default function SignIn() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, integrate with your authentication logic
    console.log("Authenticating:", credentials);
    // Assuming authentication is successful
    navigate("/"); // Redirect to home page or dashboard
  };

  return (
    <section className="mt-10 ">
      <div className="container h-full px-6 py-24 ">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://img.freepik.com/free-photo/3d-hand-hold-smartphone-with-authentication-form_107791-16570.jpg?t=st=1711841280~exp=1711844880~hmac=89755469deb17bc0e33f9a1c5113a7ce22dd33489e64facbab187e0564a7de8b&w=740"
              className="w-full h-full"
              alt="Phone image"
            />
          </div>

          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <div className="text-2xl leading-10 text-gray-900 py-5  self-center">
              Login
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={credentials.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-blue-600/80 hover:text-blue-600/100"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={credentials.password}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <Button
                  color="blue"
                  type="submit"
                  className="flex w-full justify-center rounded-md "
                >
                  Sign in
                </Button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-black-500">
              Not a member?{" "}
              <a
                href="#"
                className="font-semibold leading-6 text-blue-600/80 hover:text-blue-600/100"
              >
                Create A new account{" "}
              </a>
              <div className="mt-4 flex flex-col space-y-3">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                >
                  <FcGoogle className="mr-2 h-5 w-5" />
                  Login with Google
                </button>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900"
                >
                  <FaApple className="mr-2 h-5 w-5" />
                  Login with Apple
                </button>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
