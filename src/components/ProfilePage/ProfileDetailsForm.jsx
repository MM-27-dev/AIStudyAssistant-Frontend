import React, { useEffect, useState } from "react";
import { Eye, EyeOff, Edit3 } from "lucide-react";
import { AuthService } from "../../Services/authServices";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

export default function ProfileDetailsForm() {
  const [editPassword, setEditPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      currentPassword: Yup.string().when("newPassword", {
        is: (val) => val && val.length > 0,
        then: Yup.string().required("Current password required"),
      }),
      newPassword: Yup.string().min(6, "At least 6 characters"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("newPassword"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const payload = {
          username: values.username,
          email: values.email,
        };

        // If changing password
        if (editPassword) {
          const loginRes = await AuthService.login({
            email: values.email,
            password: values.currentPassword,
          });

          if (!loginRes?.data?.success) {
            toast.error("Current password is incorrect");
            return;
          }

          payload.password = values.newPassword;
        }

        // If profile image exists, upload it
        if (profileImage) {
          const formData = new FormData();
          formData.append("image", profileImage);
          const uploadRes = await AuthService.uploadProfileImage(formData);
          if (uploadRes?.data?.url) {
            payload.profileImage = uploadRes.data.url;
          }
        }

        await AuthService.updateProfile(payload);
        toast.success("Profile updated successfully!");
        resetForm();
        setEditPassword(false);
        setProfileImage(null);
      } catch (err) {
        toast.error(err?.response?.data?.message || "Update failed");
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await AuthService.getCurrentUser();
        const user = res?.data?.data;
        if (user) {
          formik.setValues({
            username: user.username || "",
            email: user.email || "",
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
          });
        }
      } catch (error) {
        toast.error("Failed to fetch user",error);
      }
    };
    fetchUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-8">
      {/* Profile Image */}
      <div className="flex items-center gap-4">
        <div className="relative">
          {profileImage ? (
            <img
              src={URL.createObjectURL(profileImage)}
              alt="Preview"
              className="w-24 h-24 rounded-xl object-cover"
            />
          ) : (
            <div className="w-24 h-24 rounded-xl bg-[#4b5563] text-white flex items-center justify-center text-3xl font-bold">
              {formik.values.username?.charAt(0).toUpperCase() || "U"}
            </div>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("fileInput").click();
            }}
            className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#6366f1] rounded-full flex items-center justify-center hover:bg-[#5855eb] transition-colors"
          >
            <Edit3 className="w-4 h-4 text-white" />
          </button>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setProfileImage(e.target.files[0])}
          />
        </div>
      </div>

      {/* Username + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          type="text"
          placeholder="Full name*"
          className="w-full bg-[#2a3441] border border-[#3f4855] rounded-lg px-4 py-3 text-[#e5e7eb]"
        />
        <input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          type="email"
          placeholder="Email*"
          className="w-full bg-[#2a3441] border border-[#3f4855] rounded-lg px-4 py-3 text-[#e5e7eb]"
        />
      </div>

      {/* Password Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-[#e5e7eb]">Password</h3>
          <button
            type="button"
            onClick={() => setEditPassword(!editPassword)}
            className="text-sm text-[#a855f7] hover:text-[#9333ea] flex items-center"
          >
            <Edit3 className="w-4 h-4 mr-1" />
            Edit Password
          </button>
        </div>

        {editPassword && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                name="currentPassword"
                type={showPassword ? "text" : "password"}
                value={formik.values.currentPassword}
                onChange={formik.handleChange}
                placeholder="Current Password"
                className="w-full bg-[#2a3441] border border-[#3f4855] rounded-lg px-4 py-3 pr-12 text-[#e5e7eb]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af]"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            <input
              name="newPassword"
              type="password"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              placeholder="New Password"
              className="w-full bg-[#2a3441] border border-[#3f4855] rounded-lg px-4 py-3 text-[#e5e7eb]"
            />

            <div className="relative">
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                placeholder="Confirm Password"
                className="w-full bg-[#2a3441] border border-[#3f4855] rounded-lg px-4 py-3 text-[#e5e7eb]"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af]"
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-6 py-3 rounded-lg font-medium"
      >
        {formik.isSubmitting ? "Updating..." : "Update →"}
      </button>
    </form>
  );
}
