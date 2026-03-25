
import { createClient } from "@supabase/supabase-js";
import { useState,useEffect } from 'react';
import  supabase  from "./SupabaseClient";



function Hi(){
    useEffect(() => {
        async function fetchData() {
        console.log("Starting fetch...");
        const { data, error } = await supabase.from('stuff').select('*');

        if (error) {
            console.error("Supabase error:", error);
        } else {
            console.log("Supabase data:", data);
        }
        }

        fetchData();
  }, []);
    

  console.log("HI")
    return (
        <></>
  );
}

export default Hi