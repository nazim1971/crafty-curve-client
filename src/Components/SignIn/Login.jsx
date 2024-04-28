import { useForm } from "react-hook-form";
import Navber from "../Navber/Navber";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Footer from "../Footer/Footer";


const Login = () => {

    const { login ,googleLogin, githubLogin} = useContext(AuthContext);
    // show password
    const [pass, setPass] = useState(false);
    const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit
  } = useForm()
  const onSubmit = (data) => {
    const {email,password} = data

    // login user
    login(email, password)
      .then(() => {
        toast.success("Login Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        if (err.code === "auth/invalid-credential") {
          toast.warning("Invalid user/password");
        }
      });
  }

  // google
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Login Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch();
  };

   // github
   const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        toast.success("Login Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch();
  };


    return (
        <div>
            <Navber/>
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    {...register("password")}
                    type={pass ? "text" : "password"}
                    placeholder="Enter password"
                    className="input input-bordered"
                    required
                  />
                  <a onClick={() => setPass(!pass)} className="">
                    {pass ? <FaRegEye /> : <FaRegEyeSlash />}
                  </a>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="p-3 m-3">
            <div className="flex justify-between">
                <button
                  onClick={handleGoogleLogin}
                  className="btn border-none bg-[#4539ece1] text-white"
                >
                  <FaGoogle /> Google
                </button>
                <button
                  onClick={handleGithubLogin}
                  className="btn border-none bg-black text-white"
                >
                  <FaGithub /> Github
                </button>
              </div>
              <p>
                Don't have an account?{" "}
                <Link className="btn" to="/register">
                  Register
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      <ToastContainer />
        </div>
    );
};

export default Login;