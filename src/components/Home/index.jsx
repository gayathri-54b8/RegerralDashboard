import {useState,useEffect} from "react"

const Home=()=>{
    useEffect(()=>{
        const getData=async ()=>{
            const url="https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/d4457a9c-6134-46a5-b31c-60ad13a3e2f6_userData.json"
            const response=await fetch(url)
            const responseData=await response.json()
            console.log(responseData)
        }
        getData()
    })
    return (
        <div>
            <h3>Referral Dashboard</h3>
            <input type="search" placeholder="Search here...."/>
            <div>
                <button>Search</button>
            </div>
        </div>
    )
}
export default Home