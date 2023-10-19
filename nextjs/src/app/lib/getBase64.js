import { getPlaiceholder } from "plaiceholder";

export default async function getBase64(imgUrl) {
  try {
    const res = await fetch(imgUrl);
    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (error) {
    console.log(error);
  }
}
