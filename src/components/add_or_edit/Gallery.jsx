import React, { useState } from "react";
import { useTabContextData } from "../../context/TabContext";
import "../../styles/admin/_add_edit.scss";
import defaultImg from "../add_or_edit/assets/default.jpg";
import { imgFileReader } from "../../utils/setBinaryToImage";
import SubmitButton from "./components/SubmitButton";
import { CancelUploadButton } from "./AddAndEditWidget";

function Gallery({ setResourceToPost }) {
  const [imgFile, setImgFile] = useState(null);
  const [imgFileErr, setImgFileErr] = useState(false);
  const [imgToDisplay, setImgToDisplay] = useState(defaultImg);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imgFile) {
      setImgFileErr(true);
      return;
    }

    setImgFileErr(false);
    setResourceToPost({ img: imgFile });
    setImgFile(null);
  };
  return (
    <>
      <h1>Add Gallery</h1>

      <div className="img-wrapper">
        <img src={imgToDisplay} />
      </div>
      <form>
        <div className="input-wrapper">
          <label>
            <span>Choose Image</span>
            <input
              id="gallery-input"
              placeholder="Choose Image"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const currentFile = e.currentTarget.files[0];
                setImgFile(currentFile);
                imgFileReader(currentFile, setImgToDisplay);
              }}
            />
          </label>
          {imgFileErr && <p className="error">Book cover is required</p>}
        </div>
        <div className="btn-footer">
          <SubmitButton callback={handleSubmit} />
          <CancelUploadButton />
        </div>
      </form>
    </>
  );
}

export default Gallery;
