import useUserInfo from "../hooks/useUserInfo";
import {useState} from "react";
import axios from "axios";
import Avatar from "./Avatar";
import Upload from "./Upload";
import {PulseLoader} from "react-spinners";

export default function PostForm({onPost,compact,parent,placeholder='What\'s happening?'}) {
  const {userInfo,status} = useUserInfo();
  const [text,setText] = useState('');
  const [images,setImages] = useState([]);

  async function handlePostSubmit(e) {
    e.preventDefault();
    await axios.post('/api/posts', {text,parent,images});
    setText('');
    setImages([]);
    if(onPost) {
      onPost();
    }
  }

  if (status === 'loading') {
    return '';
  }
  return (
    
  );
}