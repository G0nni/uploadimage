const uploadImage = async (imageUri: string) => {
  const formData = new FormData();
  formData.append('image', {
    name: 'image.jpg',
    type: 'image/jpg',
    uri: imageUri,
  });
  const response = await fetch('https://api.imgur.com/3/image', {
    method: 'POST',
    headers: {
      Authorization: 'Client-ID ca127bd7201a6c6',
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  });
  const json = await response.json();
  return json.data.link;
};

export {uploadImage};
