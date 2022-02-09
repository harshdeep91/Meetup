import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";
const meetups=[
    {
          id:1,
          image:"https://www.barnesandnoble.com/blog/wp-content/uploads/2019/11/lightspeed113.png",
          title:"First",
          address:"panjra"
    },
    {
     
          id:2,
          image:"https://www.barnesandnoble.com/blog/wp-content/uploads/2019/11/lightspeed113.png",
          title:"Second",
          address:"panjra"
    },
    {
     
          id:3,
          image:"https://www.barnesandnoble.com/blog/wp-content/uploads/2019/11/lightspeed113.png",
          title:"Third",
          address:"panjra"
    }
]
function HomePage(params) {
    return <Layout><MeetupList meetups={meetups}/></Layout>
}
export default HomePage;
