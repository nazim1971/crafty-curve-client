import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "../Navber/Navber";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Footer from "../Footer/Footer";

const Register = () => {
  const { createUser,updateUserProfile } = useContext(AuthContext);
// show password
    const [pass, setPass] = useState(false);
    const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm()
  const onSubmit = (data) => {
    const {email,password,name,photo} = data

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError("password", {
        type: "manual",
        message:
          "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long",
      });
      return;
    }

    // create user
    createUser(email,password)
    .then(() => {
        toast.success("Account create Successfully");
        // create user profile
        updateUserProfile(name, photo).then(() => {
          navigate(location?.state ? location.state : "/");
        });
      }).catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.warning("This Email Already Used");
        } else {

          toast.error("An error occurred");
        }
      });
  }

  return (
    <div>
      <Navber />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Your Full Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600 text-center font-semibold p-1">
                    Name is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600 text-center font-semibold p-1">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  {...register("photo", { required: true })}
                  type="text"
                  placeholder="Photo Url"
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="text-red-600 text-center font-semibold p-1">
                    Photo Url is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex  items-center gap-2">
                  <input
                    {...register("password", { required: true })}
                    type={pass ? "text" : "password"}
                    placeholder="Enter password"
                    className="input input-bordered"
                  />

                  <a onClick={() => setPass(!pass)} className="">
                    {pass ? <FaRegEye /> : <FaRegEyeSlash />}
                  </a>
                </div>
                  {errors.password && (
                  <span className="text-red-600 text-center font-semibold p-1">
                    {errors.password.message}{" "}
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div className="p-3 m-3">
              <p>
                Already have an account?{" "}
                <Link className="btn" to="/login">
                  Login
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer/>
    </div>
  );
};

export default Register;
