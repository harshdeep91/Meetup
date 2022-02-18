import Meetupdetails from "../../components/meetups/Meetupdetails";
import { MongoClient,ObjectId} from "mongodb";
import Head from 'next/head'
import {useRouter} from 'next/router'
function DetailPage(props) {
    const router=useRouter();
    function delet(){
        
        console.log("yes");
        router.push('/');
    }
    return <>
    <Head>
    <title>{props.meetupdata.title}</title>
    <meta name="description" content={props.meetupdata.description}/>
    </Head>
    <Meetupdetails img={props.meetupdata.img} title={props.meetupdata.title} description={props.meetupdata.address} address={props.meetupdata.address} delet={delet}/>
    
    </>
}
export async function getStaticPaths(){
    const client=await MongoClient.connect(process.env.URL);
const db=client.db();
const meetupcollections=db.collection('meetups');
const data=await meetupcollections.find({},{_id:1}).toArray();
client.close();
    return {
          fallback:false, 
         paths:data.map(d=>({params:{meetupid:d._id.toString()}}))
    }
}
export async function getStaticProps(context){
    //fetch data from api
const meetupId=context.params.meetupid;
const client=await MongoClient.connect(process.env.URL);
const db=client.db();
const meetupcollections=db.collection('meetups');
const data=await meetupcollections.findOne({_id:ObjectId(meetupId)});
client.close();
          return {
            props:{
                  meetupdata:{
                      id:data._id.toString(),
                      title:data.title,
                      address:data.address,
                      img:data.image
                  }
            }
      };
    }
    // export async function getServeSideProps(){
    //     const meetupId=context.params.meetupid;
    //     const client=await MongoClient.connect(process.env.URL);
    //     const db=client.db();
    //     const meetupcollections=db.collection('meetups');
    //     const data=await meetupcollections.deleteOne({_id:ObjectId(meetupId)});
    //     client.close();
    // }
export default DetailPage;