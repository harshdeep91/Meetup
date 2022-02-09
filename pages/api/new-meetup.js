import { MongoClient } from "mongodb";
async function handler(req,res) {
    if(req.method==='POST')
    {
        const data=req.body;
        // const {title,img,address,description}=data;
      const client=await MongoClient.connect('mongodb+srv://harshdeep:wnEWyn2p9WqRwMz@cluster0.x4gkf.mongodb.net/meetups?retryWrites=true&w=majority');
      const db=client.db();
      const meetupcollections=db.collection('meetups');
      const result=await meetupcollections.insertOne(data);
      console.log(result);
      client.close();
      res.status(201).json({message:'meetup inserted'});
    }
}
export default handler;