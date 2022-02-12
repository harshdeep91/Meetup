import Meetupdetails from "../../components/meetups/Meetupdetails";
import { MongoClient } from "mongodb";
function DetailPage(props) {
    return <>
    <Meetupdetails img={props.meetupdata.img} title={props.meetupdata.title} description={props.meetupdata.description} address={props.meetupdata.address} id={props.meetupdata.id}/>
    </>
}
export async function getStaticPaths(){
    const client=await MongoClient.connect('mongodb+srv://harshdeep:wnEWyn2p9WqRwMz@cluster0.x4gkf.mongodb.net/meetups?retryWrites=true&w=majority');
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
          return {
            props:{
                  meetupdata:{
                      img:'https://www.barnesandnoble.com/blog/wp-content/uploads/2019/11/lightspeed113.png',
                      title:'hi',
                      description:'hello',
                      id:meetupId,
                      address:'halua',
                      description:'rehne'
                  }
            }
      };
    }
export default DetailPage;