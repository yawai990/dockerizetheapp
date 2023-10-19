import React from "react";
import Image from "next/image";
import getBase64 from "../lib/getBase64";

const ImageCom = async ({ img }) => {
  const base64 = await getBase64(
    `https://images.unsplash.com/photo-1696789539435-3bb1254d9f08?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8`
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
