async function sendMessage({ email, fullName, msg }) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      email,
      fullName,
      msg,
    }),
  };

  return fetch(
    `${process.env.REACT_APP_SERVER_BASE_URL}/contact-us`,
    requestOptions
  )
    .then(async (response) => await response.json())
    .then((result) => result)
    .catch((error) => {
      return { msgSent: false };
    });
}

export default sendMessage;
