import MeetupList from "../components/meetups/MeetupList";
import Head from 'next/head'
import { MongoClient } from "mongodb";
const meetups=[
    {
          id:'1',
          image:"https://www.barnesandnoble.com/blog/wp-content/uploads/2019/11/lightspeed113.png",
          title:"First",
          address:"panjra"
    },
    {
     
          id:'2',
          image:"https://www.barnesandnoble.com/blog/wp-content/uploads/2019/11/lightspeed113.png",
          title:"Second",
          address:"panjra"
    },
    {
     
          id:'3',
          image:"https://www.barnesandnoble.com/blog/wp-content/uploads/2019/11/lightspeed113.png",
          title:"Third",
          address:"panjra"
    }
]
function HomePage(props) {
    return <>
    <Head>
    <title>Meetups</title>
    <meta name="description" content="List of meetups"/>
    </Head>
    <MeetupList meetups={props.meeting}/>
    </>
}
export async function getStaticProps(){
//fetch data from api 
const client=await MongoClient.connect(process.env.URL,{useNewUrlParser:true,useUnifiedTopology:true});
      const db=client.db();
      const meetupcollections=db.collection('meetups');
      const data=await meetupcollections.find().toArray();
// for(let d of data)
   
const meet= data.map((d)=>{
      return {
            id:d._id.toString(),
            title:d.title,
            address:d.address,
            image:d.image
      }
});
// console.log(meet);
 
       return {
        props:{
              meeting:meet
        },
        revalidate:1
  };
}
export default HomePage;