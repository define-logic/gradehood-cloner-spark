import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ThankYou() {

const joinGroup = () => {
window.location.href="https://chat.whatsapp.com/CknT1UBey553dlclVjkddD";
}

const shareBootcamp = () => {

const text = `I just reserved my seat for a Free AI Freelancing Bootcamp where they show how to earn using AI tools.

You can register here:
https://ai-bootcamp.gradehood.com`;

window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
}

return (

<div className="min-h-screen bg-gradient-to-b from-white to-slate-100 flex items-center justify-center px-6">

<div className="max-w-3xl w-full space-y-8">

<div className="text-center space-y-4">

<h1 className="text-4xl font-bold text-gray-900">
🎉 Seat Reserved Successfully
</h1>

<p className="text-lg text-gray-600">
You are now registered for the <b>Gradehood AI Freelancing Bootcamp</b>.
</p>

</div>

<Card className="shadow-lg border-0">

<CardContent className="p-8 space-y-6">

<div className="space-y-3">

<h2 className="text-xl font-semibold">
Step 1: Join the WhatsApp Group
</h2>

<p className="text-gray-600">
All important updates, session link and resources will be shared in the group.
</p>

<Button
onClick={joinGroup}
className="bg-green-600 hover:bg-green-700 text-white text-lg px-6 py-6 rounded-xl"
>

Join WhatsApp Group

</Button>

<p className="text-sm text-gray-500">

⚠ Important: Bootcamp access link will only be shared inside the WhatsApp group.

</p>

</div>

</CardContent>

</Card>

<Card className="shadow-lg border-0">

<CardContent className="p-8 space-y-4">

<h2 className="text-xl font-semibold">

Step 2: Invite Your Friends

</h2>

<p className="text-gray-600">

Know someone interested in freelancing or AI? Invite them to join the bootcamp.

</p>

<Button
onClick={shareBootcamp}
className="bg-black text-white hover:bg-gray-800 px-6 py-6 text-lg rounded-xl"
>

Share with Friends

</Button>

</CardContent>

</Card>

<div className="text-center text-sm text-gray-500">

<p>

Gradehood Bootcamp helps students learn practical AI freelancing skills
and start earning online.

</p>

</div>

</div>

</div>

);
}