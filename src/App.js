// import { useDispatch, useSelector } from "react-redux";
// function App() {
//   const userData = useSelector(state=>state.auth.userData);
//   const dispatch = useDispatch();

//   const handleLogin = ()=>{
//     dispatch(login({
//       email: "hello@world.com",
//       name: "Redux",
//       age: 18
//     }));
//   }
//   const logout = ()=>{
//     dispatch({
//       type: 'LOGOUT',
//     })
//   }

//   return (
//     <div className="App">
//       <pre>
//         {JSON.stringify(userData)}
//       </pre>
//       {
//         userData
//           ? <button onClick={logout}>
//             Logout
//           </button>
//           : <button onClick={handleLogin}>
//             Login
//           </button>
//       }
//     </div>
//   );
// }

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./redux-toolkit/slices/auth.slice";

const App = ()=>{
  const userData = useSelector(state=>state.auth.userData);
  const dispatch = useDispatch()

  const handleLogin = ()=>{
    dispatch(login({
      email: "emir@gmail.com",
      name: "emir"
    }))
  }

  const handleLogout = ()=>{
    dispatch(logout())
  }

  return (
    <div>
      <pre>
        {JSON.stringify(userData)}
      </pre>
      {
        userData
          ? <button onClick={handleLogout}>
            Logout
          </button>
          : <button onClick={handleLogin}>
            Login
          </button>
      }
    </div>
  )
}

export default App;