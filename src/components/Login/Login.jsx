/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthService } from "../../services/authServices";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null); // null | { type, text }
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    agreeTerms: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    agreeTerms: Yup.boolean().oneOf([true], "Please accept the terms."),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setMessage(null);
    setSubmitting(true);

    try {
      const response = await AuthService.login({
        email: values.email,
        password: values.password,
      });

      if (response.data.statusCode === 200) {
        setMessage({ type: "success", text: "Login successful!" });
        setTimeout(() => {
          navigate("/chatdashboard");
        }, 1000);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Login failed. Please try again.";
      setMessage({ type: "error", text: errorMessage });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1E1F24] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-[#1E1F24] flex flex-col md:flex-row rounded-2xl shadow-xl overflow-hidden">
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 px-6 sm:px-10 py-10">
          <div className="mb-8 flex items-center space-x-2">
            <div className="bg-[#7F5AF0] rounded-full p-2">🤖</div>
            <h1 className="text-2xl font-bold text-white">BotBuzz</h1>
          </div>

          <h2 className="text-3xl font-semibold text-white mb-2">Login</h2>
          <p className="text-sm text-[#B0B0B0] mb-6">
            Add your credentials to log in
          </p>

          {message && (
            <div
              className={`text-sm mb-4 ${
                message.type === "error" ? "text-red-500" : "text-green-400"
              }`}
            >
              {message.text}
            </div>
          )}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-5 text-sm">
                {/* Email */}
                <div>
                  <label className="text-[#B0B0B0]">Your email*</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full mt-1 px-4 py-2 bg-transparent border border-[#3C3C3C] text-white placeholder-[#8B8B8B] rounded-md focus:outline-none focus:ring-1 focus:ring-[#7F5AF0]"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="text-[#B0B0B0]">Password*</label>
                  <div className="relative">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter password"
                      className="w-full mt-1 px-4 py-2 bg-transparent border border-[#3C3C3C] text-white placeholder-[#8B8B8B] rounded-md focus:outline-none focus:ring-1 focus:ring-[#7F5AF0]"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Terms */}
                <div className="flex items-center text-[#B0B0B0] text-sm">
                  <Field
                    type="checkbox"
                    name="agreeTerms"
                    className="accent-[#7F5AF0] w-4 h-4 mr-2"
                  />
                  <label>I agree to terms & conditions</label>
                </div>
                <ErrorMessage
                  name="agreeTerms"
                  component="div"
                  className="text-red-500 text-xs"
                />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#A78BFA] hover:bg-[#9F80F6] text-black font-semibold py-2 rounded-md"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-[#3C3C3C]" />
                  <span className="text-[#B0B0B0] text-sm">Or</span>
                  <div className="h-px flex-1 bg-[#3C3C3C]" />
                </div>

                {/* Google Login (Placeholder) */}
                <button
                  type="button"
                  className="w-full flex items-center justify-center space-x-3 bg-black border border-[#2C2C2C] py-2 rounded-md hover:bg-[#111]"
                >
                  <FcGoogle className="text-xl" />
                  <span className="text-white">Login with Google</span>
                </button>
              </Form>
            )}
          </Formik>

          {/* Sign Up Link */}
          <p className="mt-6 text-sm text-[#B0B0B0] text-center">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-[#A78BFA] hover:underline cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </div>

        {/* Right Image */}
        <div className="hidden md:block w-full md:w-1/2">
          <img
            src="/login.svg"
            alt="Login Illustration"
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
