import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import authContext from "../store/auth-context";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const authCtx = useContext(authContext);
  const formik = useFormik({
    initialValues: {
      email: "",
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
      email: Yup.string().email("*Invalid email address").required("*Required"),
    }),
    onSubmit: async (values) => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
        authCtx.login(userCredential.user.accessToken);
        navigate("/");
      } catch (error) {
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          setError("User not found! Please, enter valid email and password.");
        }
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="signup-form">
      <label htmlFor="email" className="label">
        EMAIL
      </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className="input"
      />
      {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}

      <label htmlFor="password" className="label">
        PASSWORD
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
