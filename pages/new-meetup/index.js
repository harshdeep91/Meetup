import Meetupform from "../../components/meetups/NewMeetupForm";
function NewmeetupPage(params) {
function meetuphandler(event){
      console.log(event);
}
    return <>
    <h1>This is NewmeetupPage</h1>
    <Meetupform OnAddMeetup={meetuphandler}/>
    </>
}
export default NewmeetupPage;