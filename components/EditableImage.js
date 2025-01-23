import {useState} from "react";
import {FileDrop} from "react-file-drop";
import {PulseLoader} from "react-spinners";

export default function EditableImage({type,src,onChange,className,editable=false}) {
  const [isFileNearby, setIsFileNearby] = useState(false);
  const [isFileOver,setIsFileOver] = useState(false);
  const [isUploading,setIsUploading] = useState(false);

  let extraClasses = '';
  if (isFileNearby && !isFileOver) extraClasses += ' bg-blue-500 opacity-40';
  if (isFileOver) extraClasses += ' bg-blue-500 opacity-90';
  if (!editable) extraClasses = '';

  function updateImage(files,e) {
    if (!editable) {
      return;
    }
    e.preventDefault();
    setIsFileNearby(false);
    setIsFileOver(false);
    setIsUploading(true);
    const data = new FormData();
    data.append(type, files[0]);
    fetch('/api/upload', {
      method: 'POST',
      body:data,
    }).then(async response => {
      const json = await response.json();
      onChange(json.src);
      setIsUploading(false);
    });
  }

  return (
    
  );
}