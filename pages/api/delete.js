import { MongoClient,ObjectId} from "mongodb";
async function handler(req,res) {
    if(req.method==='DELETE')
    {
        const data=req.body;
        // const {title,img,address,description}=data;
      const client=await MongoClient.connect(process.env.URL);
      const db=client.db();
      const meetupcollections=db.collection('meetups');
      await meetupcollections.deleteOne({_id:ObjectId(data)});
      client.close();
      res.status(201).json({message:'meetup Deleted'});
    }
}
export default handler; 