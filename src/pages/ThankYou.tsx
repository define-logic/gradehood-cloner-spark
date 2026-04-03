import React from "react";

export default function ThankYou() {

const joinGroup = () => {
window.location.href="https://chat.whatsapp.com/CknT1UBey553dlclVjkddD";
}

const share = () => {

const text = "I'm joining a Free AI Freelancing Bootcamp. You can register here: https://ai-bootcamp.gradehood.com/";

window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
}

return (

<div style={{
fontFamily:"Arial",
textAlign:"center",
padding:"80px",
background:"#f6f7fb",
minHeight:"100vh"
}}>

<div style={{
background:"white",
padding:"40px",
maxWidth:"600px",
margin:"auto",
borderRadius:"12px",
boxShadow:"0 10px 30px rgba(0,0,0,0.1)"
}}>

<h1>🎉 Seat Reserved!</h1>

<p>You have successfully registered for the AI Freelancing Bootcamp.</p>

<p><b>Step 1:</b> Join the WhatsApp group to receive updates.</p>

<button
onClick={joinGroup}
style={{
background:"#25D366",
color:"white",
border:"none",
padding:"16px 24px",
fontSize:"18px",
borderRadius:"8px",
cursor:"pointer",
marginTop:"20px"
}}
>
Join WhatsApp Group
</button>

<p style={{marginTop:"30px"}}>
<b>Step 2:</b> Invite your friends interested in AI freelancing.
</p>

<button
onClick={share}
style={{
background:"#333",
color:"white",
border:"none",
padding:"16px 24px",
fontSize:"18px",
borderRadius:"8px",
cursor:"pointer",
marginTop:"10px"
}}
>
Invite Friends
</button>

</div>
</div>
);
}
