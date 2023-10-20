import React from "react";
import Image from "next/image";
import getBase64 from "../lib/getBase64";

const ImageCom = async ({ img }) => {
  const base64 = await getBase64(
    "https://images.unsplash.com/photo-1498462335304-e7263fe3925a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1cnJ5fGVufDB8fDB8fHww"
  );
  return (
    <Image
      src={`/img/${img}`}
      width={1024}
      height={1024}
      quality={100}
      alt="gallery_img"
      placeholder="blur"
      loading="lazy"
      blurDataURL={base64}
      sizes="400px"
      className="rounded-md mb-4 object-cover"
    />
  );
};

export default ImageCom;
