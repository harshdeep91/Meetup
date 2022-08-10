import classes from './Meetupdetails.module.css';
import {useRouter} from 'next/router'
// import { MongoClient,ObjectId} from "../../node_modules/mongodb";
const Meetupdetails = (props) => {
//     const router=useRouter();
//     async function deletehandler(){
// //         const client=await MongoClient.connect(process.env.URL);
// // const db=client.db();
// // const meetupcollections=db.collection('meetups');
// // // const data=await meetupcollections.deleteOne({_id:ObjectId(props.key)});
// //  client.close();
// //             router.push('/');
// console.log(process.env.URL);
//     }
    return (
         <div className={classes.details}>
        <img src={props.img} alt="halua" width={500} height={500}/>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        <button className={classes.button} onClick={props.delet}>Delete</button>
        </div>
        
        );
}
 
export default Meetupdetails;
