function toggleService(service) {
  const content = service.querySelector(".service-content");
  content.style.display = content.style.display === "block" ? "none" : "block";
}