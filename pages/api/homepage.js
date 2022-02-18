import { MongoClient } from "mongodb";
async function handler(req,res) {
        // const {title,img,address,description}=data;
      const client=await MongoClient.connect(process.env.URL);
      const db=client.db();
      const meetupcollections=db.collection('meetups');
      const data=await meetupcollections.find().toArray();
      client.close();
      res.json(data);
}
export default handler; 