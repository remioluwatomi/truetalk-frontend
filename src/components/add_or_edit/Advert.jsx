import React, { useState, useEffect } from "react";
// import { useTabContextData } from "../../context/TabContext";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ResourceText, ResourceTextArea } from "../custom_input/CustomInput";
import defaultImg from "../add_or_edit/assets/default.jpg";
import setBinaryToImage, { imgFileReader } from "../../utils/setBinaryToImage";
import "../../styles/admin/_add_edit.scss";
import Title from "./Title";
import SubmitButton from "./components/SubmitButton";
import { CancelUploadButton } from "./AddAndEditWidget";
import useTabCardImage from "../../hooks/useTabCardImage";

function Advert({ newUpload, data, setResourceToPost }) {
  const [imgFile, setImgFile] = useState(null);
  const [imgFileErr, setImgFileErr] = useState(false);
  const [tabImgBinary, setTabImageBinary] = useState(null);
  const { imgToDisplay, setNewUpload, setImgToDisplay } = useTabCardImage(
    tabImgBinary ?? data["img_link"]
  );

  useEffect(() => {
    const { img } = data;
    setTabImageBinary(img);
  }, [data]);

  useEffect(() => {
    setNewUpload(newUpload);
  }, []);

  let initialValues, keyTitle;
  if (!newUpload) {
    const { img, advertLink, description, title } = data;
    // tabImg = img;

    initialValues = {
      advertLink,
      description,
      title,
    };
    keyTitle = title;
  } else {
    initialValues = {
      advertLink: "",
      title: "",
      description: "",
    };
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    if (!imgFile && newUpload) {
      setImgFileErr(true);
      return;
    }
    setImgFileErr(false);
    if (imgFile) values.img = imgFile;

    if (!newUpload) values.keyTitle = keyTitle;

    setResourceToPost(values);
    setSubmitting(false);
  };

  const validationSchema = Yup.object({
    advertLink: Yup.string()
      .url("Invalid URL format")
      .required("URL is required"),
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <>
      <Title title={data.title} resource={"Advert"} />
      <div className="img-wrapper">
        <img src={imgToDisplay ?? defaultImg} />
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form encType="multipart/form-data">
          <div className="input-wrapper">
            <label>
              <span>File Upload</span>
              <input
                id="img"
                placeholder="Choose File"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setImgFile(e.currentTarget.files[0]);
                  imgFileReader(e.currentTarget.files[0], setImgToDisplay);
                }}
              />
            </label>
            {imgFileErr && <p className="error">Image is required</p>}
          </div>

          <ResourceText
            label="Advert Title"
            id="title"
            placeholder="Your Advert Title"
            type="text"
            name="title"
          />

          <ResourceText
            label="Advert Link"
            id="advertLink"
            type="url"
            name="advertLink"
          />

          <ResourceTextArea
            label="Description"
            id="description"
            placeholder="Advert Description"
            name="description"
          />

          <div className="btn-footer">
            <SubmitButton />
            <CancelUploadButton />
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default Advert;
