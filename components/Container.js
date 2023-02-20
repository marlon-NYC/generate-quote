import useStore from "../src/store";

const Container = () => {
    const quote = useStore(state => state.quote);
    const isLoading = useStore(state => state.isLoading);
    const incrementRefresh = useStore(state => state.incrementRefresh);
    
    return (
        <div className="container">
        <h1>Inspirational Boost</h1>
        {isLoading? (<div className="quoteContainer">Loading yeah </div>) : 
        (
        <div className="quoteContainer"> &ldquo;{quote}&rdquo;<br></br></div>
        )
        }
            <div id="buttonContainer">
            <button onClick={() => {
                incrementRefresh();
                }}>Refresh</button>
            </div>
        </div> 
    );
}

export default Container;