import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updatePassword } from "firebase/auth";
import authContext from "../store/auth-context";
import { useNavigate } from "react-router-dom";

export default function ChangePasswordForm() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const authCtx = useContext(authContext);
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(15, "*Must be 15 characters or less")
        .required("*Required")
        .min(6, "*Must be 6 characters or more")
        .matches(/[a-z]+/, "Must contain one lowercase character")
        .matches(/[A-Z]+/, "Must contain one uppercase character")
        .matches(/\d+/, "Must contain one number"),
    }),
    onSubmit: async (values) => {
      try {
        const userCredential = await updatePassword(authCtx.user, values.password);
        navigate("/");
      } catch (error) {
        console.log(error);
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          setError("User not found! Please, enter valid email and password.");
        }
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="signup-form">
      <label htmlFor="password" className="label">
        NEW PASSWORD
      </label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.password}
        className="input"
      />
      {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
      <button type="submit" className="submit">
        LOGIN
      </button>
      {error && <div className="error-auth">{error}</div>}
    </form>
  );
}
