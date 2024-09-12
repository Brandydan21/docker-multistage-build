import { Link } from 'react-router-dom';
import { RootState, AppDispatch} from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../features/counter/counterSlice';

const HomePage = () =>{
    const counterValue = useSelector((state: RootState) => state.counter.value);
    
    const dispatch: AppDispatch = useDispatch();

    return(
        <div>
            <h1>Home Page</h1>
            <h1>Counter: {counterValue}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <br/><br/>
            <Link to="/contents">Contents</Link>
            <br/>
            <Link to="/about">About</Link>
        </div>
    );
}

export default HomePage;