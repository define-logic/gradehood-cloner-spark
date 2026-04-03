import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ThankYou() {

const joinGroup = () => {
window.location.href="https://chat.whatsapp.com/CknT1UBey553dlclVjkddD";
}

const shareBootcamp = () => {

const text = `🚀 I just reserved my seat for the FREE AI Freelancing Bootcamp by Gradehood.

Learn how beginners are earning with AI tools.

Register here:
https://ai-bootcamp.gradehood.com`;

window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
}

return (

<div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">

<div className="max-w-3xl w-full space-y-8">

<motion.div
initial={{opacity:0, y:30}}
animate={{opacity:1, y:0}}
transition={{duration:0.6}}
className="text-center space-y-4"
>

<h1 className="text-4xl font-bold">
🎉 Seat Reserved Successfully
</h1>

<p className="text-lg text-muted-foreground">
You are now registered for the <b>Gradehood AI Freelancing Bootcamp</b>
</p>

<p className="text-sm text-muted-foreground">
Follow the steps below to receive the session link and updates.
</p>

</motion.div>


{/* JOIN GROUP CARD */}

<motion.div
initial={{opacity:0, y:40}}
animate={{opacity:1, y:0}}
transition={{delay:0.2}}
>

<Card className="shadow-xl border">

<CardContent className="p-8 space-y-6">

<h2 className="text-xl font-semibold">

Step 1: Join the WhatsApp Group

</h2>

<p className="text-muted-foreground">

This is the <b>official bootcamp community</b> where we will share:

</p>

<ul className="list-disc pl-6 text-muted-foreground space-y-1">

<li>Bootcamp session link</li>

<li>AI freelancing resources</li>

<li>Real client-getting strategies</li>

<li>Bonus AI workflow templates</li>

<li>Important announcements</li>

</ul>

<div className="flex justify-center pt-4">

<Button
onClick={joinGroup}
className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-xl shadow-lg"
>

Join WhatsApp Group

</Button>

</div>

<p className="text-sm text-center text-muted-foreground">

⚠ Important: Bootcamp access link will only be shared inside the WhatsApp group.

</p>

</CardContent>

</Card>

</motion.div>


{/* EVENT INFO */}

<motion.div
initial={{opacity:0, y:40}}
animate={{opacity:1, y:0}}
transition={{delay:0.4}}
>

<Card className="shadow-xl border">

<CardContent className="p-8 space-y-4">

<h2 className="text-xl font-semibold">

About the Bootcamp

</h2>

<ul className="text-muted-foreground space-y-2">

<li>• Discover AI freelance services clients pay ₹5K-₹50K for</li>

<li>• Learn beginner-friendly AI tools</li>

<li>• See real automation workflows businesses need</li>

<li>• Understand how to get your first freelance client</li>

</ul>

</CardContent>

</Card>

</motion.div>


{/* SHARE SECTION */}

<motion.div
initial={{opacity:0, y:40}}
animate={{opacity:1, y:0}}
transition={{delay:0.6}}
>

<Card className="shadow-xl border">

<CardContent className="p-8 text-center space-y-4">

<h2 className="text-xl font-semibold">

Step 2: Invite Your Friends

</h2>

<p className="text-muted-foreground">

Know someone interested in freelancing or AI?  
Invite them to join this bootcamp.

</p>

<div className="flex justify-center">

<Button
onClick={shareBootcamp}
className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-6 rounded-xl shadow-lg"
>

Share with Friends

</Button>

</div>

<p className="text-sm text-muted-foreground">

Helping friends discover AI opportunities together 🚀

</p>

</CardContent>

</Card>

</motion.div>


{/* FOOTER */}

<div className="text-center text-sm text-muted-foreground pt-4">

Gradehood Bootcamp helps students learn practical AI freelancing skills and start earning online.

</div>

</div>

</div>

);
}