export default function binaryToImg(data, imgState) {
  const blob = new Blob([new Uint8Array(data)], {
    type: "image",
  });
  const dataUrl = URL.createObjectURL(blob);
  if (imgState) imgState(dataUrl);
  else return dataUrl;
}

export function imgFileReader(data, imgState) {
  const reader = new FileReader();
  reader.onload = () => {
    if (imgState) imgState(reader.result);
    else return reader.result;
  };

  if (data) reader.readAsDataURL(data);
}
