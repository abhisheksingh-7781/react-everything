import React from "react";

import Cards from "./components/Cards";
const App = () => {

const jobs = [
  {
    logo: "https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw",
    companyName: "Google",
    position: "Senior UI/UX Designer",
    jobType: "Full Time",
    workMode: "Remote",
    payRate: "$65/hr",
    location: "Mountain View, CA, USA",
    posted: "5 days ago"
  },
  {
    logo: "https://img.icons8.com/?size=96&id=YJfJ0JM5Imsj&format=png",
    companyName: "Microsoft",
    position: "Graphic Designer",
    jobType: "Contract",
    workMode: "In Office",
    payRate: "$40/hr",
    location: "Redmond, WA, USA",
    posted: "2 weeks ago"
  },
  {
    logo: "https://img.icons8.com/?size=100&id=W9M6LCrTvolF&format=png&color=000000",
    companyName: "Spotify",
    position: "Product Designer",
    jobType: "Full Time",
    workMode: "Hybrid",
    payRate: "$55/hr",
    location: "Stockholm, Sweden",
    posted: "1 week ago"
  },
  {
    logo: "https://img.icons8.com/?size=160&id=mL4If2AcAEe1&format=png",
    companyName: "Amazon",
    position: "Senior Graphic Designer",
    jobType: "Full Time",
    workMode: "Remote",
    payRate: "$60/hr",
    location: "Seattle, WA, USA",
    posted: "3 days ago"
  },
  {
    logo: "https://img.icons8.com/?size=100&id=gav46YArUSy1&format=png&color=000000",
    companyName: "Adobe",
    position: "Junior UI/UX Designer",
    jobType: "Contract",
    workMode: "In Office",
    payRate: "$35/hr",
    location: "San Jose, CA, USA",
    posted: "1 month ago"
  },
  {
    logo: "https://img.icons8.com/?size=100&id=wA5rN96FVDtq&format=png&color=000000",
    companyName: "Meta",
    position: "Senior Product Designer",
    jobType: "Full Time",
    workMode: "Hybrid",
    payRate: "$70/hr",
    location: "Menlo Park, CA, USA",
    posted: "4 days ago"
  },
  {
    logo: "https://img.icons8.com/?size=160&id=6ZOTxz7GcLoP&format=png",
    companyName: "Airbnb",
    position: "Visual Designer",
    jobType: "Full Time",
    workMode: "Remote",
    payRate: "$58/hr",
    location: "San Francisco, CA, USA",
    posted: "2 weeks ago"
  },
  {
    logo: "https://img.icons8.com/?size=128&id=retlnlU8BjQA&format=png",
    companyName: "Netflix",
    position: "Creative Design Lead",
    jobType: "Contract",
    workMode: "Hybrid",
    payRate: "$75/hr",
    location: "Los Gatos, CA, USA",
    posted: "6 days ago"
  },
  {
    logo: "https://img.icons8.com/?size=96&id=zfHRZ6i1Wg0U&format=png",
    companyName: "Figma",
    position: "UI Designer",
    jobType: "Full Time",
    workMode: "Remote",
    payRate: "$50/hr",
    location: "New York, NY, USA",
    posted: "1 week ago"
  },
  {
    logo: "https://img.icons8.com/?size=100&id=13927&format=png&color=000000",
    companyName: "Dribbble",
    position: "Junior Graphic Designer",
    jobType: "Contract",
    workMode: "Remote",
    payRate: "$30/hr",
    location: "Austin, TX, USA",
    posted: "3 weeks ago"
  }
];





  return (
    <div className="parent">

   {jobs.map(function(dets){

    return <Cards logo={dets.logo} company={dets.companyName} position={dets.position} jobType={dets.jobType} workMode={dets.workMode} location={dets.location} payRate={dets.payRate} posted={dets.posted} />
   })}
    
    </div>
  );
};

export default App;
