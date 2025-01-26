import Avatar from "./Avatar";
import ReactTimeAgo from "react-time-ago";
import Link from "next/link";
import PostButtons from "./PostButtons";

export default function PostContent({
  text,author,createdAt,_id,
  likesCount,likedByMe,commentsCount,
  images,
  big=false}) {

  function showImages() {
    if (!images?.length) {
      return '';
    }
    return (
      <div className="flex -mx-1">
        {images.length > 0 && images.map(img => (
          <div className="m-1" key={img}>
            <img src={img} alt=""/>
          </div>
        ))}
      </div>
    );
  }

  return (
    
  );
}