import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function SignupForm() {
  const [error, setError] = useState("");
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
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        console.log(userCredential);
      } catch (error) {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setError("Email is alreay in use! Please, try to sing up with another email or login with current email");
        }
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="signup-form">
      <label htmlFor="email" className="label">
        EMAIL
      </label>
      <input id="email" name="email" type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className="input" />
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
        SUBMIT
      </button>
      {error && <div className="error-auth">{error}</div>}
    </form>
  );
}
