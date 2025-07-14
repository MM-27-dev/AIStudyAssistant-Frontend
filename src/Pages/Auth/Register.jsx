import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../Services/authServices";

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
      const errorMessage =
        error.response?.data?.message ||
        "❌ Registration failed. Please try again.";
      alert(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="h-screen bg-[#111317] flex items-center justify-center px-4">
      <div className="max-w-6xl w-full h-[90vh] flex rounded-2xl overflow-hidden shadow-2xl">
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 bg-[#1E1F24] p-10 overflow-y-auto">
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-[#7F5AF0] p-1 rounded-full text-white text-lg">
              🤖
            </div>
            <h1 className="text-2xl font-bold text-white">BotBuzz</h1>
          </div>

          <h2 className="text-3xl font-bold text-white mb-2">
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
              <Form className="space-y-4 text-sm">
                {/* Fullname */}
                <div>
                  <label className="text-[#B0B0B0]">Your fullname*</label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full mt-1 px-4 py-2 bg-transparent border border-[#333] text-white placeholder-[#888] rounded-md focus:outline-none focus:ring-1 focus:ring-[#7F5AF0]"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-[#B0B0B0]">Your email*</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full mt-1 px-4 py-2 bg-transparent border border-[#333] text-white placeholder-[#888] rounded-md focus:outline-none focus:ring-1 focus:ring-[#7F5AF0]"
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
                      className="w-full mt-1 px-4 py-2 bg-transparent border border-[#333] text-white placeholder-[#888] rounded-md focus:outline-none focus:ring-1 focus:ring-[#7F5AF0]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-2.5 text-gray-400"
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

                {/* Confirm Password */}
                <div>
                  <label className="text-[#B0B0B0]">Confirm Password*</label>
                  <div className="relative">
                    <Field
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm password"
                      className="w-full mt-1 px-4 py-2 bg-transparent border border-[#333] text-white placeholder-[#888] rounded-md focus:outline-none focus:ring-1 focus:ring-[#7F5AF0]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="absolute right-3 top-2.5 text-gray-400"
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

                {/* Terms */}
                <div className="flex items-center text-sm text-[#B0B0B0]">
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
                  {isSubmitting ? "Submitting..." : "Sign up"}
                </button>

                {/* Divider */}
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-[#3C3C3C]" />
                  <span className="text-[#B0B0B0] text-sm">Or</span>
                  <div className="h-px flex-1 bg-[#3C3C3C]" />
                </div>

                {/* Google login */}
                <button
                  type="button"
                  className="w-full flex items-center justify-center space-x-3 bg-black border border-[#2C2C2C] py-2 rounded-md hover:bg-[#111]"
                >
                  <FcGoogle className="text-xl" />
                  <span className="text-white text-sm">
                    Register with Google
                  </span>
                </button>
              </Form>
            )}
          </Formik>

          <p className="mt-4 text-sm text-[#B0B0B0] text-center">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-[#A78BFA] hover:underline cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>

        {/* Right Image Section */}
        <div className="hidden md:block w-1/2 bg-[#1E1F24]">
          <img
            src="/login.svg"
            alt="Register Illustration"
            className="w-full h-full object-cover rounded-l-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
