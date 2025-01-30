export default async function fetchData(path, signal) {
  const tabs = ["BLOG", "VIDEO", "GALLERY", "ADVERT", "BOOK"];

  if (!tabs.includes(path.toUpperCase())) return [];
  if (!signal) return;

  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_BASE_URL}/${path}s`,
      { signal }
    );
    if (response.ok) {
      const result = await response.json();
      return result;
    }
    return [];
  } catch (error) {
    throw error;
  }
}
