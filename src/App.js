import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import EditNote from "./features/notes/EditNote";
import NewNote from "./features/notes/NewNote";
import Prefetch from "./features/auth/Prefetch";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import { ROLES } from "./config/roles";
import useTitle from "./hooks/useTitle";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") disableReactDevTools();

function App() {
    useTitle("Supra Infosystem");

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* { public routes} */}
                <Route index element={<Public />} />
                <Route path="login" element={<Login />} />
                {/* protected routes */}
                <Route element={<PersistLogin />}>
                    <Route
                        element={
                            <RequireAuth
                                allowedRoles={[...Object.values(ROLES)]}
                            />
                        }
                    >
                        <Route element={<Prefetch />}>
                            <Route path="dash" element={<DashLayout />}>
                                <Route index element={<Welcome />} />

                                <Route
                                    element={
                                        <RequireAuth
                                            allowedRoles={[
                                                ROLES.Manager,
                                                ROLES.Admin,
                                            ]}
                                        />
                                    }
                                ></Route>

                                <Route path="users">
                                    <Route index element={<UsersList />} />
                                    <Route path=":id" element={<EditUser />} />
                                    <Route
                                        path="new"
                                        element={<NewUserForm />}
                                    />
                                </Route>
                            </Route>

                            <Route path="notes">
                                <Route index element={<NotesList />} />
                                <Route path=":id" element={<EditNote />} />
                                <Route path="new" element={<NewNote />} />
                            </Route>
                        </Route>
                        {/* End Dash */}
                    </Route>
                </Route>{" "}
                {/* end of protected routes */}
            </Route>
        </Routes>
    );
}

export default App;

// import { Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Public from "./components/Public";
// import Login from "./features/auth/Login";
// import DashLayout from "./components/DashLayout";
// import Welcome from "./features/auth/Welcome";
// import NotesList from "./features/notes/NotesList";
// import UsersList from "./features/users/UsersList";
// import EditUser from "./features/users/EditUser";
// import EditNote from "./features/notes/EditNote";
// import NewUserForm from "./features/users/NewUserForm";

// import NewNote from "./features/notes/NewNote";
// import Prefetch from "./features/auth/Prefetch";

// function App() {
//     return (
//         <Routes>
//             <Route path="/" element={<Layout />}>
//                 <Route index element={<Public />} />
//                 <Route path="login" element={<Login />} />

//                 <Route element={<Prefetch/>}>

//                 <Route path="dash" element={<DashLayout />}>
//                     <Route index element={<Welcome />} />
//                 </Route>

//                 <Route path="users">
//                     <Route index element={<UsersList />} />
//                     <Route path=":id" element={<EditUser></EditUser>}></Route>
//                     <Route
//                         path="new"
//                         element={<NewUserForm></NewUserForm>}
//                     ></Route>
//                 </Route>

//                 <Route path="notes">
//                     <Route index element={<NotesList />} />
//                     <Route path=":id" element={<EditNote></EditNote>}></Route>
//                     <Route path="new" element={<NewNote></NewNote>}></Route>
//                 </Route>

//                 {/* End Dash */}

//                 </Route>
//             </Route>
//         </Routes>
//     );
// }

// export default App;

// import { Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Public from "./components/Public";
// import Login from "./features/auth/Login";
// import DashLayout from "./components/DashLayout";
// import Welcome from "./features/auth/Welcome";
// import "./App.css";
// import NotesList from "./features/notes/NotesList";
// import UsersList from "./features/users/UsersList";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Public />} />
//         <Route path="login" element={<Login></Login>}></Route>
//         <Route path="dash" element={<DashLayout />}></Route>
//         <Route index element={<Welcome />} />
//         <Route path="wel" element={<Welcome />} />

//         <Route path="notes">
//           <Route index element={<NotesList />}></Route>
//         </Route>
//         <Route path="users">
//           <Route index element={<UsersList />}></Route>
//         </Route>
//       </Route>
//     </Routes>
//     // <div className="App">

//     // </div>
//   );
// }

// export default App;
