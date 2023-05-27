// Uso de fetch

// const API_KEY = 'tc0wxZlgG8KmVmm4BjAGRD83boLMhCWU';
const API_KEY = 'OP8Pzz1INgkxXFuR312g4IN8OFCAOLUm';
const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

try {
  const res = await fetch(URL);
  const json = await (res.ok ? res.json() : Promise.reject(res));

  const giftUrl = json.data.images.original.url;
  
  const img = document.createElement("img");
  img.src=giftUrl;

  document.body.append(img);

} catch (error) {
  console.log(error);
}
