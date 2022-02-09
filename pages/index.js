
import MeetupList from "../components/meetups/MeetupList";
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
    return <MeetupList meetups={props.meeting}/>
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
      return {
        props:{
              meeting:meetups
        },
        revalidate:10
  };
}
export default HomePage;