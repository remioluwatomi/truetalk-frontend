function redirectToPage(pageUrl) {
  if (pageUrl.startsWith("/") || pageUrl.startsWith("http")) {
    window.location.href = pageUrl;
  }
}

export default redirectToPage;
