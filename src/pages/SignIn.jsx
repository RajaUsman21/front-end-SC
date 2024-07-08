import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:3005/auth/signIn", values);
        console.log('API response:', response.data);

        if (response.data.status === 0) {
          toast.error(response.data.message);
        } else {
          toast.success(response.data.message);
          localStorage.setItem("token",response?.data?.token)
          localStorage.setItem("isLogin","true");
          navigate("/");
        }
      } catch (error) {
       
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-6xl mx-auto flex">
        {/* Left Side */}
        <div className="w-1/2 bg-blue-900 text-white flex items-center justify-center p-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to Startup Connect</h2>
            <p className="text-lg">
              Startup Connect is a platform designed to help business startups connect, collaborate,
              and find resources by leveraging the power of Google Maps.
            </p>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-1/2 bg-white p-12 flex items-center justify-center">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email address"
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-500 text-xs italic mt-1">{formik.errors.email}</p>
                ) : null}
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your password"
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-red-500 text-xs italic mt-1">{formik.errors.password}</p>
                ) : null}
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
