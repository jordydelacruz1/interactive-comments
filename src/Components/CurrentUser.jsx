
import '../index.css'

const CurrentUser = ( {data} ) => {

    // console.log(data)
    return (
        <div className="user-comment">
            <img src={data.currentUser.image.png} className="user-profile"/>
            <input type="text" placeholder='Add a comment...'/>
            <button className="btn send"> Send </button>  
        </div>
    )
}

export default CurrentUser