import { useRouter } from "next/router";
import Meetupform from "../../components/meetups/NewMeetupForm";
import Head from 'next/head'
function NewmeetupPage(params) {
    const router=useRouter();
async function meetuphandler(meetdata){
      const response=await fetch('/api/new-meetup',{
        method:'POST',
        body:JSON.stringify(meetdata),
        headers:{
            'Content-type':'application/json'
        }
      });
      const data=await response.json();
      console.log(data);
      router.push('/'); 
}
    return <>
    
    <Head>
    <title>Add New Meetup</title>
    <meta name="description" content="Describe your amazing meetup here"/>
    </Head>
    <h1>This is NewmeetupPage</h1>
    <Meetupform onAddMeetup={meetuphandler}/>
    </>
}
export default NewmeetupPage;