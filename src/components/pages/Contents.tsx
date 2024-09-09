import { Link } from 'react-router-dom';

const ContentsPage = () =>{
    return(
        <div>
            <h1>Contents Page</h1>
            <Link to="/about">About</Link>
            <br/>
            <Link to="/">Home</Link>
        </div>
    );
}

export default ContentsPage;