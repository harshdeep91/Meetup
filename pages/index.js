import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from 'next/head'
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
// export async function getServerSideProps(context){
//       const req=context.req;
//       const res=context.res;
//       //this will update every server request
//       // but problem is when we dont want to reload every request(when our content not updated frequently)
//       return {
//             props:{
//                   meeting:meetups
//             },
  
//       };
// }
export async function getStaticProps(){
//fetch data from api 
const client=await MongoClient.connect(process.env.URL);
const db=client.db();
const meetupcollections=db.collection('meetups');
const data=await meetupcollections.find().toArray();
client.close();
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