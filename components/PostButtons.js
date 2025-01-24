import {useState} from "react";
import axios from "axios";
import FlipNumbers from 'react-flip-numbers';
import Link from "next/link";

export default function PostButtons({
  username,
  id,
  likesCount:likesCountDefault=0,
  likedByMe:likedByMeDefault=false,
  commentsCount,
}) {
  const [likesCount,setLikesCount] = useState(likesCountDefault);
  const [likedByMe,setLikedByMe] = useState(likedByMeDefault);
  async function toggleLike() {
    const response = await axios.post('/api/like', {id});
    if (response.data?.like) {
      setLikesCount(prev => prev+1);
      setLikedByMe(true);
    } else {
      setLikesCount(prev => prev - 1);
      setLikedByMe(false);
    }
  }
  return (
    
  );
}