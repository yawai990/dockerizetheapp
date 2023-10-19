// "use client";
import Image from "next/image";
import ImageCom from "./component/ImageCom";

export default function Home() {
  return (
    <main>
      <h5 className="mb-3 text-center uppercase text-lg font-semibold">
        Image Gallery With Blur Effect
      </h5>

      <section className="p-5 columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 justify-self-start gap-5">
        <ImageCom img={"img.jpg"} />

        {Array.from({ length: 17 }).map((_, idx) => (
          <ImageCom
            key={idx}
            img={`img${idx + 1}.jpg`}
            baseURL={
              idx % 2 === 0
                ? "https://images.unsplash.com/photo-1697201826242-141dec817a6f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
                : "https://images.unsplash.com/photo-1695891957303-b65ece769f11?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D"
            }
          />
        ))}
        {Array.from({ length: 17 }).map((_, idx) => (
          <ImageCom
            key={idx}
            img={`img${idx + 1}.jpg`}
            baseURL={
              idx % 2 === 0
                ? "https://images.unsplash.com/photo-1697201826242-141dec817a6f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
                : "https://images.unsplash.com/photo-1695891957303-b65ece769f11?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D"
            }
          />
        ))}
        {Array.from({ length: 17 }).map((_, idx) => (
          <ImageCom
            key={idx}
            img={`img${idx + 1}.jpg`}
            baseURL={
              idx % 2 === 0
                ? "https://images.unsplash.com/photo-1697201826242-141dec817a6f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
                : "https://images.unsplash.com/photo-1695891957303-b65ece769f11?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D"
            }
          />
        ))}
        {Array.from({ length: 17 }).map((_, idx) => (
          <ImageCom
            key={idx}
            img={`img${idx + 1}.jpg`}
            baseURL={
              idx % 2 === 0
                ? "https://images.unsplash.com/photo-1697201826242-141dec817a6f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
                : "https://images.unsplash.com/photo-1695891957303-b65ece769f11?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D"
            }
          />
        ))}
        <ImageCom img={"img.jpg"} />
        <ImageCom img={"img.jpg"} />
        <ImageCom img={"img.jpg"} />
      </section>
    </main>
  );
}
