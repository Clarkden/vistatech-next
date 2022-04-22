// import { useSession, signIn, signOut } from "next-auth/react"
// import ManageData from "./components/manageData"

// export default function Component() {
//   const { data: session } = useSession()

//   if (session) {
//     return (
//       <div className="h-fit pb-10">
//         <div className="mb-5 bg-red-100 rounded-b-lg shadow-red-100 shadow-md p-2 h-fit">
//           <h1 className="mb-2">Signed in as <span className="text-green-500">{session.user.name}</span></h1>
//           <button onClick={() => signOut()} className='bg-red-300 p-1 rounded-md'>Sign out</button>
//           <a href="/" className="bg-green-300 p-2 rounded-md mx-2">Home</a>
//         </div> 
//         <ManageData username={session.user.name}/>    
//       </div>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }

import React from 'react'

export default function manage() {
  return (
    <div>
      <h1>Manage</h1>
    </div>
  )
}
