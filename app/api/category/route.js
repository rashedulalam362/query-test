import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST() {
    //single post-data

    // try {
    //     const prisma = new PrismaClient()
    //     const post = await prisma.category.create({
    //         data: {
    //             authorId: 2,
    //             parentId: 1245,
    //             title: "rashed",
    //             metaTile: "alam",
    //             slug: "1233",
    //             summary: "gagaggahjh"

    //         }
           
    //     })
    //     console.log(post);
    //     return NextResponse.json({ status: 'success', data: post })

    // } catch (error) {
    //     return NextResponse.json({ status: 'fail', data: error })
    // }



    //post-many-user

    // try {
    // const prisma=new PrismaClient()    
    // const posts= await prisma.category.createMany({
    //     data:[{
    //         authorId: 1,
    //             parentId: 1245,
    //             title: "rashed",
    //             metaTile: "alam",
    //             slug: "1233",
    //             summary: "gagaggahjh" 

    //       },
    //       {
    //         authorId: 3,
    //             parentId: 1245,
    //             title: "rashed2",
    //             metaTile: "alam2",
    //             slug: "1233",
    //             summary: "gagaggahjh" 
 

    //       },{
    //         authorId: 4,
    //             parentId: 1845,
    //             title: "rashed3",
    //             metaTile: "alam4",
    //             slug: "1233",
    //             summary: "gagaggahjh" 


    //       }]
    // })
    //  console.log(posts);
    //  return NextResponse.json({status:'success',data:posts})

    // } catch (error) {
    //     return NextResponse.json({status:'fail',data:error})
    // }


    //  // Read All Data
    // try {
    //     const prisma=new PrismaClient()    
    //     const post= await prisma.category.findMany({
    //         where: { id: 3 },
    //     })
    //     console.log(post);
      
    //      return NextResponse.json({status:'success',data:post})

    //     } catch (error) {
    //         return NextResponse.json({status:'fail',data:error})
    //     }


   //   //update user 
    //  try {
    //     const prisma=new PrismaClient()    
    //     const post= await prisma.category.update({
    //         where:{id:4},
    //        data:{
    //         authorId: 2,
    //                     parentId: 1245,
    //                     title: "rashedCHY",
    //                     metaTile: "HASAN",
    //                     slug: "123AAA3",
    //                     summary: "gagaggahjh"
    //        }
    //     })
    //      console.log("newUser");
    //      return NextResponse.json({status:'success',data:post})
    
    //     } catch (error) {
    //         return NextResponse.json({status:'fail',data:error})
    //     }


    
    //delte single  POST 
    // try {
    //     const prisma=new PrismaClient()    
    //     const post= await prisma.category.delete({
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