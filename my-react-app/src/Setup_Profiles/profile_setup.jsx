import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../SupabaseClient";
import './setup.css';





// useEffect(() => {
//         // 1. Set up the interval
//         const intervalId = setInterval(() => {
//             console.log('Running in the background...');

//             async function fetchData() {
//                 const { data, error } = await supabase.from('stuff').select('*');

//                 if (error) {
//                     console.error("Supabase error:", error);
//                 } else {
//                     console.log("Supabase data:", data);
//                     setGr(data);
//                 }
//             }

            
//             fetchData();
//         }, 3000); // Runs every 5000ms (5 seconds)

//         //  Clean up the interval on unmount
//         return () => {
//         clearInterval(intervalId);
//         console.log('Component unmounted, interval cleared.');
//         };
//     }, []);

























export default function Set_Up_Profile(){


//     const [user, setUser] = useState(null)


// //     useEffect(() => {
// //          //Runs on the first render
// //          //And any time any dependency value changes
// //      }, [prop, state]);

//     useEffect(() => {
//         const loadUser = async() =>{
//             const {data: {user}, error} = await supabase.auth.getUser();
//             if (user) {
//                 setUser(user)
//             }
//             else{
//                 setUser(null)
//             }
//         }

        
//         // run loadUser
//         loadUser()
//     })


//     const signout = async() =>{
//         const {  error } = await supabase.auth.signOut()
//     };

//     const print =() =>{
//         if(user){
//             console.log(user.id)
//         }else{
//             console.log("No user")
//         }
//     }

    return (
        <>
            <button onClick={print}>PRINT</button>
            <button onClick={signout}>OUT</button>
            
                


        </>
    )
}