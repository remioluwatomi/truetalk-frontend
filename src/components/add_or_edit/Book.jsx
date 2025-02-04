import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import defaultImg from "../add_or_edit/assets/default.jpg";
import setBinaryToImage, { imgFileReader } from "../../utils/setBinaryToImage";
import { Formik, Form } from "formik";
import { ResourceText, ResourceTextArea } from "../custom_input/CustomInput";
import "../../styles/admin/_add_edit.scss";
import Title from "./Title";
import SubmitButton from "./components/SubmitButton";
import { CancelUploadButton } from "./AddAndEditWidget";

function Book({ newUpload, data, setResourceToPost }) {
  const [imgFile, setImgFile] = useState(null);
  const [imgFileErr, setImgFileErr] = useState(false);
  const [bookFile, setBookFile] = useState(null);
  const [bookFileErr, setBookFileErr] = useState(false);
  const [imgToDisplay, setImgToDisplay] = useState(defaultImg);

  let initialValues, keyTitle, tabImg;

  if (!newUpload) {
    const { img, title, description, price } = data;

    tabImg = img;
    keyTitle = title;

    initialValues = {
      title,
      description,
      price,
    };
  } else {
    initialValues = {
      title: "",
      description: "",
      price: "",
    };
  }

  useEffect(() => {
    if (!newUpload) setBinaryToImage(tabImg?.data, setImgToDisplay);
    return () => setImgToDisplay(defaultImg);
  }, []);

  const handleSubmit = async (values, { setSubmitting }) => {
    if (newUpload) {
      if (!imgFile) {
        setImgFileErr(true);
        return;
      }
      setImgFileErr(false);

      if (!bookFile) {
        setBookFileErr(true);
        return;
      }
      setBookFileErr(false);
    }

    if (bookFile) values["book-pdf"] = bookFile;
    if (imgFile) values.img = imgFile;

    setResourceToPost({ ...values, keyTitle });
    setSubmitting(false);
    setBookFile(null);
    setImgFile(null);
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number().min(1).required("Price is required"),
  });

  return (
    <>
      <Title title={data.title} resource={"Book"} />

      <div className="img-wrapper">
        <img src={imgToDisplay} />
      </div>

      <Formik
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        <Form encType="multipart/form-data">
          <div className="input-wrapper">
            <label>
              <span className="block">Choose Book Cover</span>
              <input
                id="book-cover"
                placeholder="Book Cover"
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

          <ResourceText
            id="book-title"
            type="text"
            placeholder="Book Title"
            label="Book Title"
            name="title"
            value="omooo"
          />

          <ResourceTextArea
            id="book-desc"
            type="text"
            placeholder="Book Desc"
            label="Book Description"
            name="description"
            value="description ommooo"
          />

          <ResourceText
            id="book-price"
            type="number"
            min="1"
            placeholder="Book Price"
            label="Book Price"
            name="price"
            value="32"
          />

          <div className="input-wrapper">
            <label>
              <span>Choose Book File</span>
              <input
                id="book-file"
                placeholder="Book File"
                type="file"
                accept=".pdf"
                onChange={(e) => {
                  setBookFile(e.currentTarget.files[0]);
                }}
              />
            </label>
            {bookFileErr && <p className="error">Book file is required</p>}
          </div>

          <div className="btn-footer">
            <SubmitButton />
            <CancelUploadButton />
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default Book;
