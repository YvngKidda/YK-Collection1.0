export async function uploadImage(file) {
  const url = "https://api.cloudinary.com/v1_1/dbxda5twk/image/upload";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "yk_upload");

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  return data.secure_url; // this is your image link
}
