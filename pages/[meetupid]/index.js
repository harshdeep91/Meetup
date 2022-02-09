import Meetupdetails from "../../components/meetups/Meetupdetails";

function DetailPage(props) {
    return <>
    <Meetupdetails img={props.meetupdata.img} title={props.meetupdata.title} description={props.meetupdata.description} address={props.meetupdata.address} id={props.meetupdata.id}/>
    </>
}
export async function getStaticPaths(){
    return {
          fallback:false, 
             paths:[
                 {
                     params:{
                     meetupid:'1',
                      },
                 },
                {
                    params:{
                    meetupid:'2'
                     }
               },
               {
                params:{
                meetupid:'3'
                 }
               }
                ]
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