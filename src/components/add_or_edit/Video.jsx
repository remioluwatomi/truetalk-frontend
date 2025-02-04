import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ResourceText, ResourceTextArea } from "../custom_input/CustomInput";
import Title from "./Title";
import SubmitButton from "./components/SubmitButton";
import { CancelUploadButton } from "./AddAndEditWidget";
import useCurrentTab from "../../hooks/useCurrentTab";

function Video({ newUpload, data, setResourceToPost }) {
  const { tabLowerCase } = useCurrentTab();
  let initialValues, keyTitle;

  if (!newUpload) {
    const { description, title, vid_link: vidLink } = data;

    initialValues = { description, title, vidLink };
    keyTitle = title;
  } else {
    initialValues = {
      description: "",
      title: "",
      link: "",
    };
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    if (!newUpload) values.keyTitle = keyTitle;
    setResourceToPost(values);
    setSubmitting(false);
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    vidLink: Yup.string().url("Invalid URL format").required("URL is required"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <>
      <Title title={data.title} resource={"Video"} />

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <ResourceText
            label="Video Title"
            placeholder="Your Video Title"
            type="text"
            name="title"
            className="add-edit-vid"
            currentTab={tabLowerCase}
          />

          <ResourceText
            label="Video Link"
            placeholder="https://your-advert-url"
            type="url"
            name="vidLink"
            className="add-edit-vid"
            currentTab={tabLowerCase}
          />

          <ResourceTextArea
            label="Video Description"
            placeholder="Video Description"
            name="description"
            className="add-edit-vid"
            currentTab={tabLowerCase}
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

export default Video;
