import  { useState } from "react";
import { TbLockAccessOff } from "react-icons/tb";
import { Link,useNavigate } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import { useFormik } from "formik";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import axios from 'axios';

const Signup = () => {
  // const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      const newUserData = {
        username: values.username,
        email: values.email,
        password: values.password,
      };
      try {
        setIsLoading(true);
        await axios.post('https://fakestoreapi.com/users', newUserData);
        setIsLoading(false);
        toast.success("Registration successful!");
        formik.resetForm();
        setTimeout(() => {
          navigate('/signin');
        }
        , 3000);
      } catch (error) {
        setIsLoading(false);
        console.error('Failed to register:', error);
       console.log(error);
       
        
      }
    },
  });

  return (
    <div className="my-8">
      <ToastContainer />
      <div className="h-fit w-full grid place-items-center ">
        <div className="w-4/12 grid py-4 px-2 h-fit border-2 shadow-2xl ">
          <div className="flex justify-end">
            <span className="text-slate-900 cursor-pointer my-2">
              <Link to={"/"}>
                <IoMdCloseCircle className="text-3xl" />
              </Link>
            </span>
          </div>
          <div className="bg-green-400 py-4 w-full flex cursor-pointer items-center justify-center gap-2 text-white">
            <h2 className="text-4xl font-bold tracking-tight ">Create Account</h2>
            <span>
              <TbLockAccessOff className="text-5xl text-gray-600" />
            </span>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="form-control w-full grid place-items-center my-2"
          >
            <div className="w-full flex flex-col gap-3">
              
              <div className="w-full">
                <input
                  type="text"
                  placeholder="enter username here"
                  className="input input-bordered w-full"
                  id="username"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="username"
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-red-500 text-sm">{formik.errors.username}</div>
                ) : null}
              </div>
              <div className="w-full">
                <input
                  type="email"
                  placeholder="enter your email here"
                  className="input input-bordered w-full"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="email"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="w-full">
                <input
                  className="input input-bordered w-full"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="current-password"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm">{formik.errors.password}</div>
                ) : null}
              </div>
            </div>
            <button
              type="submit"
              className="transition-all duration-200 bg-green-400 btn w-full my-2"
              disabled={!formik.isValid || isLoading}
            >
              {isLoading ? (
                <div className="">
                  <span className="loading loading-dots loading-lg text-green-500"></span>
                </div>
              ) : (
                "Sign up"
              )}
            </button>
          </form>
          <Link to={'/signin'} className="w-full text-center capitalize  text-sm text-gray-500 font-mono cursor-pointer">
            <h3>
             I have an account?
              <span className=" uppercase border-b-2 border-t-2 border-green-600 cursor-pointer">
                LogIn
              </span>
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;