// copied lesson 9

import NewNoteForm from './NewNoteForm'

import { useGetUsersQuery } from '../users/usersApiSlice'
import { PulseLoader } from 'react-spinners/PulseLoader'

const NewNote = () => {
    // const users = useSelector(selectAllUsers)

    const {users} = useGetUsersQuery("usersList", {
        selectFromResult: ({data}) => ({
            users: data?.ids.map(id => data?.entities[id])
        }),
    })
    if(!users?.length) return <PulseLoader color={"#FFF"} />

    // if (!users?.length) return <p>Not Currently Available</p>

    const content = <NewNoteForm users={users} />

    return content
}
export default NewNote



// import React from "react";
// import NewNoteForm from './NewNoteForm'
// import { useSelector } from "react-redux";
// // import { selectAllNotes } from "./notesApiSlice";
// import { selectAllUsers } from "../users/usersApiSlice";

// const NewNote = () => {
//     const users = useSelector(selectAllUsers)
//     const content = users ? <NewNoteForm users={users} /> : <p>Loding...</p>
    
    
    
//     return content;
// };

// export default NewNote;
