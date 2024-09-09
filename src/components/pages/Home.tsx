import { Link } from 'react-router-dom';

const HomePage = () =>{
    return(
        <div>
            <h1>Home Page</h1>
            <Link to="/contents">Contents</Link>
            <br/>
            <Link to="/about">About</Link>
        </div>
    );
}

export default HomePage;