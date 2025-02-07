export default async function postData(tab, values, newUpload) {
  let myHeaders = new Headers();
  if (tab === "video") myHeaders.append("Content-Type", "application/json");

  const loopOverValues = () => {
    let data = tab !== "video" ? new FormData() : {};
    for (const key in values) {
      tab !== "video"
        ? data.append(key, values[key])
        : (data[key] = values[key]);
    }
    return tab !== "video" ? data : JSON.stringify(data);
  };

  let requestOptions = {
    method: newUpload ? "POST" : "PUT",
    headers: myHeaders,
    body: loopOverValues(),
  };

  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_BASE_URL}/${tab}s`,
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (e) {
    console.log("error", JSON.stringify(e));
  }
}
