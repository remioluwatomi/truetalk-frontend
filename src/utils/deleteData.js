export default async function deleteData(tab, resourceId) {
  if (!tab || !resourceId) return;

  try {
    let requestOptions = {
      method: "DELETE",
    };
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/${tab}s/${encodeURIComponent(
        resourceId
      )}`,
      requestOptions
    );

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    throw error;
  }
}
