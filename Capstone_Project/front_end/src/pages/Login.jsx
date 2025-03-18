// import React, { useState, useContext, useEffect } from 'react';
// import { AppContext } from '../context/AppContext';
// import axios from 'axios';
// // import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const { backendUrl, token, setToken } = useContext(AppContext);
//   const navigate = useNavigate();

//   const [state, setState] = useState('Sign Up');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();

//     try {
//       if (state === 'Sign Up') {
//         const { data } = await axios.post(`${backendUrl}/api/user/register`, {
//           name,
//           email,
//           password,
//         });

//         if (data.success) {
//           localStorage.setItem('token', data.token);
//           setToken(data.token);
//           toast.success('Account created successfully!');
//         } else {
//           alert.error(data.message);
//         }
//       } else {
//         const { data } = await axios.post(`${backendUrl}/api/user/login`, {
//           email,
//           password,
//         });

//         if (data.success) {
//           localStorage.setItem('token', data.token);
//           setToken(data.token);
//           // toast.success('Logged in successfully!');
//         } else {
//         alert("User Does Not Exist");
//         }
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || error.message);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       navigate('/');
//     }
//   }, [token, navigate]); // Added `navigate` to dependency array for better practice.

//   return (
//     <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
//       <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
//         <p className="text-2xl font-semibold">
//           {state === 'Sign Up' ? 'Create Account' : 'Login'}
//         </p>
//         <p>
//           Please {state === 'Sign Up' ? 'Sign Up' : 'Login'} to book an
//           appointment.
//         </p>

//         {state === 'Sign Up' && (
//           <div className="w-full">
//             <p>Full Name</p>
//             <input
//               className="border border-zinc-300 rounded w-full p-2 mt-1"
//               type="text"
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//               required
//             />
//           </div>
//         )}

//         <div className="w-full">
//           <p>Email</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="text"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             required
//           />
//         </div>

//         <div className="w-full">
//           <p>Password</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-primary text-white w-full py-2 rounded-md text-base"
//         >
//           {state === 'Sign Up' ? 'Create Account' : 'Login'}
//         </button>
//         {state === 'Sign Up' ? (
//           <p>
//             Already have an account?{' '}
//             <span
//               onClick={() => setState('Login')}
//               className="text-primary underline cursor-pointer"
//             >
//               Login here
//             </span>
//           </p>
//         ) : (
//           <p>
//             Create a new account?{' '}
//             <span
//               onClick={() => setState('Sign Up')}
//               className="text-primary underline cursor-pointer"
//             >
//               Click here
//             </span>
//           </p>
//         )}
//       </div>
//     </form>
//   );
// };

// export default Login;

import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { backendUrl, token, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === 'Sign Up') {
        const { data } = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem('token', data.token);
          setToken(data.token);
          toast.success('Account created successfully!');
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem('token', data.token);
          setToken(data.token);
          toast.success('Logged in successfully!');
        } else {
          toast.error('User does not exist');
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <form onSubmit={onSubmitHandler} style={styles.formContainer}>
      <div style={styles.formBox}>
        <p style={styles.title}>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'Sign Up' : 'Login'} to book an appointment.</p>

        {state === 'Sign Up' && (
          <div style={styles.inputGroup}>
            <p>Full Name</p>
            <input
              style={styles.input}
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div style={styles.inputGroup}>
          <p>Email</p>
          <input
            style={styles.input}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <p>Password</p>
          <input
            style={styles.input}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        {state === 'Sign Up' ? (
          <p>
            Already have an account?{' '}
            <span onClick={() => setState('Login')} style={styles.link}>
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{' '}
            <span onClick={() => setState('Sign Up')} style={styles.link}>
              Click here
            </span>
          </p>
        )}
      </div>
      <ToastContainer />
    </form>
  );
};

// Embedded CSS Styles
const styles = {
  formContainer: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '24px',
    minWidth: '340px',
    maxWidth: '400px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    textAlign: 'left',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  inputGroup: {
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: '0.3s',
  },
  link: {
    color: '#007bff',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

export default Login;

