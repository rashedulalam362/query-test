import { NextResponse } from "next/server";
import {  PrismaClient } from "@prisma/client";

export async function POST(){
//     BigInt.prototype.toJSON = function () {
//     return this.toString()
// }
//single user-data

    // try {
    // const prisma=new PrismaClient()    
    // const newUser= await prisma.user.create({
    //     data:{
    //       firstName:'rashed',
    //       lastName:'alam',
    //       middleName:'rashed',
    //       mobile:'111111',
    //       email:'rashed@getPrismaClient.com',
    //       passwordHash:'122##' 

    //     }
    // })
    //  console.log("newUser");
    //  return NextResponse.json({status:'success',data:newUser})

    // } catch (error) {
    //     return NextResponse.json({status:'fail',data:error})
    // }

    // //many-user

    // try {
    // const prisma=new PrismaClient()    
    // const newUser= await prisma.user.createMany({
    //     data:[{
    //         firstName:'rashed',
    //         lastName:'alam',
    //         middleName:'rashed',
    //         mobile:'111111',
    //         email:'rashed@getPrismaClient.com',
    //         passwordHash:'122##' 
  
    //       },
    //       {
    //         firstName:'rashed',
    //         lastName:'alam',
    //         middleName:'rashed',
    //         mobile:'111111',
    //         email:'rashed@getPrismaClient.com',
    //         passwordHash:'122##' 
  
    //       },{
    //         firstName:'rashed',
    //         lastName:'alam',
    //         middleName:'rashed',
    //         mobile:'111111',
    //         email:'rashed@getPrismaClient.com',
    //         passwordHash:'122##' 
  
    //       }]
    // })
    //  console.log("newUser");
    //  return NextResponse.json({status:'success',data:newUser})

    // } catch (error) {
    //     return NextResponse.json({status:'fail',data:error})
    // }
 

    //  // Read All Data
    //  try {
    //     const prisma=new PrismaClient()    
    //     const newUser= await prisma.user.findMany({
            
    //     })
    //      console.log("newUser");
    //      return NextResponse.json({status:'success',data:newUser})
    
    //     } catch (error) {
    //         return NextResponse.json({status:'fail',data:error})
    //     }

     // Read single Data
    //  try {
    //     const prisma=new PrismaClient()    
    //     const newUser= await prisma.user.findUnique({
    //        where:{
    //         id:2,
    //        }
    //     })
    //      console.log("newUser");
    //      return NextResponse.json({status:'success',data:newUser})
    
    //     } catch (error) {
    //         return NextResponse.json({status:'fail',data:error})
    //     }


//   //update user 
//      try {
//         const prisma=new PrismaClient()    
//         const newUser= await prisma.user.update({
//             where:{id:2},
//            data:{
//             firstName:'rashed',
//             lastName:'hasan',
//             middleName:'chy',
//             mobile:'122344'
//            }
//         })
//          console.log("newUser");
//          return NextResponse.json({status:'success',data:newUser})
    
//         } catch (error) {
//             return NextResponse.json({status:'fail',data:error})
//         }

  
    //delte single  user 
    // try {
    //     const prisma=new PrismaClient()    
    //     const newUser= await prisma.user.delete({
    //         where:{
    //          id:2,
    //         }
          
    //     })
    //      console.log("newUser");
    //      return NextResponse.json({status:'success',data:newUser})
    
    //     } catch (error) {
    //         return NextResponse.json({status:'fail',data:error})
    //     } 


}