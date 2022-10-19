function Note(props){

    function handleDelte(){
        props.onDeleteNote(props.id);
    }

    return(
        <div className="notes">
                <h2>{props.title}</h2>
                <h5>( {props.tagline} )</h5>
                <p>{props.content}</p>
                <button onClick={handleDelte} className="dlt_btn">DELETE</button>
        </div>
    );
}

export default Note;
