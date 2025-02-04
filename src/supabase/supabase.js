import { data } from "autoprefixer";
import { supabase } from "./client";

export const fetchDataFromSupabase = async (resourceName) => {
  let { data, error } = await supabase.from(resourceName).select("*");
  console.log(data, error);
  return { data, error };
};

const uploadFileToBucket = async (file, bucketName) => {
  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(file?.name, file);

  return { data, error };
};

export const supabaseCreateResource = async (tabToPostTo, resourceToPost) => {
  let dataToUpload = {};

  switch (tabToPostTo) {
    case "book":
      // title, description, price, file_path, img_link;
      const { data: fileRef, error: fileErr } = await uploadFileToBucket(
        resourceToPost["book-pdf"],
        "booksFile"
      );

      if (fileErr) return;
      const { fullPath: file_path } = fileRef;

      const { data: imgRef, error: imgErr } = await uploadFileToBucket(
        resourceToPost["img"],
        "booksImgs"
      );

      if (imgErr) return;
      const { fullPath: img_link } = imgRef;

      dataToUpload = {
        title: resourceToPost?.title,
        description: resourceToPost?.description,
        price: resourceToPost?.price,
        img_link: constructPublicBucketUrl(img_link),
        file_path,
      };

      break;

    case "video":
      dataToUpload = {
        title: resourceToPost?.title,
        description: resourceToPost?.description,
        vid_link: resourceToPost?.vid_link,
      };
      break;

    case "advert":
      const { data: advertData, error: advertErr } = await uploadFileToBucket(
        resourceToPost?.img,
        "advertImgs"
      );

      if (advertErr) return;
      const { fullPath: advert_img_link } = advertData;

      dataToUpload = {
        title: resourceToPost?.title,
        description: resourceToPost?.description,
        advertLink: resourceToPost?.advertLink,
        img: constructPublicBucketUrl(advert_img_link),
      };

      break;

    case "gallery":
      const { data: imgData, error: galleryErr } = await uploadFileToBucket(
        resourceToPost?.img,
        "gallery"
      );

      if (galleryErr) return;

      const { fullPath: img_path } = imgData;

      dataToUpload = {
        img_link: constructPublicBucketUrl(img_path),
      };

      break;

    default:
      break;
  }

  const { data: result, error: insertRowErr } = await insertRow(
    tabToPostTo,
    dataToUpload
  );
  return { mesaage: "still uploading.." };
};

const insertRow = async (table, dataToUpload) => {
  const { data, error } = await supabase.from(table).insert([dataToUpload]);

  if (error) {
    console.error("Error inserting row:", error.message);
  } else {
    console.log("Row inserted successfully:", data);
  }
  return { data, error };
};

const constructPublicBucketUrl = (fullPath) =>
  `${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/${fullPath}`;
