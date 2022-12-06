import React, { useState } from 'react';

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile} from 'firebase/auth';
import { getDatabase, ref as dbRef, set as firebaseSet } from 'firebase/database';

export default function ProfilePage(props) {
  //convenience
  const currentUser = props.currentUser;
  const displayName = props.currentUser.userName;

  const [imageFile, setImageFile] = useState(undefined)
  let initialURL = props.currentUser.userImg;
  const [imageUrl, setImageUrl] = useState(initialURL)

  //image uploading!
  const handleChange = (event) => {
    if(event.target.files.length > 0 && event.target.files[0]) {
      const imageFile = event.target.files[0]
      setImageFile(imageFile);
      //console.log(URL.createObjectURL(imageFile));
      setImageUrl(URL.createObjectURL(imageFile));
    }
  }

  const handleImageUpload = async (event) => {
    console.log("Uploading", imageFile);
   
    const storage = getStorage();
    const imageRef = ref(storage, "userImages/"+currentUser.userId+".png");
    await uploadBytes(imageRef, imageFile)
    const downloadUrlString = await getDownloadURL(imageRef);
    console.log(downloadUrlString);

    //put in user profile
    await updateProfile(currentUser, { photoURL: downloadUrlString} );

    //also put in database (for fun)
    const db = getDatabase();
    const refString = "userData/"+currentUser.userId+"/imgUrl";
    console.log(refString);
    const userImgRef = dbRef(db, "userData/"+currentUser.userId+"/imgUrl")
    firebaseSet(userImgRef, downloadUrlString);

  }

  return (
    <div className="container">
      <h2>
        {props.currentUser.userName && displayName+"'s"} Profile
      </h2>

      <div className="mb-5 image-upload-form">
        <img src={imageUrl} alt="user avatar preview" className="mb-2"/>
        <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label>
        <button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button>
        <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange}/>
      </div>
    </div>
  )
}