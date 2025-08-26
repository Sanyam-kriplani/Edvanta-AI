"use client"
import React from 'react'
import { useUser } from '@clerk/nextjs';
import { db } from '../configs/db.js';
import { USER_TABLE } from '../configs/schema.js';
import { eq } from 'drizzle-orm';
import { useEffect } from 'react';


function Provider({children}) {
  const {user} = useUser();

  React.useEffect(() => {
    user && checkNewUser();
  }, [user]);

  const checkNewUser = async () => {
    //check if user exists in db

    const result=await db.select().from(USER_TABLE)
    .where(eq(USER_TABLE.email,user?.primaryEmailAddress?.emailAddress));

    console.log("Result",result);


    
    // if new user create user in db
    if(result?.length===0){
    const userResp=await db.insert(USER_TABLE).values({
      username:user?.fullName ,
      email:user?.primaryEmailAddress?.emailAddress,
      password:"" // no password as using clerk
    }).returning({id:USER_TABLE.id});

    console.log("New User Created",userResp);
  }


      return (
  <div>
      {children}
    </div>
  )
}
}

export default Provider;
