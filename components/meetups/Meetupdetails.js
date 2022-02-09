import classes from './Meetupdetails.module.css';


const Meetupdetails = (props) => {
    return ( <div className={classes.details}>
        <img src={props.img} alt="halua"/>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        </div>
        );
}
 
export default Meetupdetails;