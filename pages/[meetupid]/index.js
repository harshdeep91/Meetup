import {useRouter} from 'next/router';
function RandomPage(params) {
    const router=useRouter();
     const q=router.query.meetupid;
    return <>
    <h1>This is {q} Page</h1>
    
    </>
}
export default RandomPage;