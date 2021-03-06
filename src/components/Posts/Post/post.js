import {React,useState} from 'react';
import { useDispatch } from 'react-redux';
import EditForm from './EditForm';
import { deletePost,likePost } from '../../../actions/posts';


const Post = ({ post, currentId, setCurrentId }) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    const [likes,setLikes] = useState(post?.social.likes)
    const userId = user?.result?._id
    const hasLikedPost = post.social.likes?.find((like) => like === userId);
    const [errorHandler, setErrorHandler] = useState({
        hasError: false,
        message: "",
      });

//handle likes
    const handleLike = async () => {
        dispatch(likePost(post._id));
    if(userId){
        if (hasLikedPost) {
          setLikes(post.social.likes.filter((id) => id !== userId));
        } else {
          setLikes([...post.social.likes, userId]);
        }
      }};
    
    const Likes = () => {
        if (likes.length > 0) {
          return likes.find((like) => like === userId)
            ? (
             <> {likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <>{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
    
        return <>Like</>;
      };

    return (
        
        <div className="border-padding">
            <img className="maxwidth" src={post.image} alt={ `${post.title} by ${post.artist}` }/>
            <h4>{post.title}</h4>
            <h6>{post.social.originalPoster}</h6>
            {(user?.result?.username===post?.social?.originalPoster||user?.result?.role==="admin")&&(<>
            <button onClick={() => setCurrentId(post._id,setErrorHandler) }>Edit</button>
            <button onClick={() => dispatch(deletePost(post._id,setErrorHandler)) }>Delete</button>
            </>)}
            <button   onClick={handleLike}>
                <Likes />
            </button>
            <EditForm currentId={currentId} setCurrentId={setCurrentId} />
        </div>
    );
}

export default Post;