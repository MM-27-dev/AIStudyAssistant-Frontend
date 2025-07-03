import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../services/authServices";


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    agreeTerms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms & conditions"
    ),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    try {
      const payload = {
        username: values.name.toLowerCase(),
        email: values.email,
        password: values.password,
      };

      const response = await AuthService.signup(payload);

      if (response?.data?.statusCode === 200) {
        alert("✅ Registration successful!");
        resetForm();
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration error:", error);
      const errorMessage =
        error.response?.data?.message ||
        "❌ Registration failed. Please try again.";
      alert(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E1F24] px-4 py-10">
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-[#1E1F24] rounded-2xl overflow-hidden shadow-xl">
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 px-6 sm:px-10 py-10">
          <div className="mb-8 flex items-center space-x-2">
            <div className="bg-[#7F5AF0] rounded-full p-2">
              <span role="img" aria-label="bot">
                🤖
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white">BotBuzz</h1>
          </div>

          <h2 className="text-3xl font-semibold text-white mb-2">
            Create an Account
          </h2>
          <p className="text-sm text-[#B0B0B0] mb-6">
            Kindly fill in your details to create an account
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-5 text-sm">
                <div>
                  <label className="text-[#B0B0B0]">Your fullname*</label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full mt-1 px-4 py-2 bg-transparent border border-[#3C3C3C] text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#7F5AF0]"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div>
                  <label className="text-[#B0B0B0]">Your email*</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full mt-1 px-4 py-2 bg-transparent border border-[#3C3C3C] text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#7F5AF0]"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div>
                  <label className="text-[#B0B0B0]">Password*</label>
                  <div className="relative">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter password"
                      className="w-full mt-1 px-4 py-2 bg-transparent border border-[#3C3C3C] text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#7F5AF0]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-3 text-gray-400 cursor-pointer w-5 h-5"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div>
                  <label className="text-[#B0B0B0]">Confirm Password*</label>
                  <div className="relative">
                    <Field
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm password"
                      className="w-full mt-1 px-4 py-2 bg-transparent border border-[#3C3C3C] text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#7F5AF0]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="absolute right-3 top-3 text-gray-400 cursor-pointer w-5 h-5"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="flex items-center space-x-2 text-[#B0B0B0]">
                  <Field
                    type="checkbox"
                    name="agreeTerms"
                    className="accent-[#7F5AF0] w-4 h-4"
                  />
                  <label>I agree to terms & conditions</label>
                </div>
                <ErrorMessage
                  name="agreeTerms"
                  component="div"
                  className="text-red-500 text-xs"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#A78BFA] hover:bg-[#9F80F6] text-black font-semibold py-2 rounded-md"
                >
                  {isSubmitting ? "Submitting..." : "Sign up"}
                </button>

                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-[#3C3C3C]" />
                  <span className="text-[#B0B0B0] text-sm">Or</span>
                  <div className="h-px flex-1 bg-[#3C3C3C]" />
                </div>

                <button
                  type="button"
                  className="w-full flex items-center justify-center space-x-3 bg-[#0E0E0E] border border-[#2C2C2C] py-2 rounded-md hover:bg-[#1A1A1A]"
                >
                  <FcGoogle className="text-xl" />
                  <span className="text-white">Register with Google</span>
                </button>
              </Form>
            )}
          </Formik>

          <p className="mt-6 text-sm text-[#B0B0B0] text-center">
            Already have an Account?{" "}
            <a
              href="/login"
              className="text-[#A78BFA] underline hover:text-[#cdb4fa]"
            >
              Login
            </a>
          </p>
        </div>

        {/* Right Image Section */}
        <div className="hidden md:block w-full md:w-1/2">
          <img
            src="/login.svg"
            alt="VR User"
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
