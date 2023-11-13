import { useEffect, useState } from "react";
import { Container } from "./styles";
import { Reviewbox } from "../OrderReview/styles";
import http from "@/utils/http";

export const Orderdetail = () => {
  const [products, setProducts] = useState();

  return (
    <>
      <Container>
        <div className="video">
          <iframe
            style={{ paddingBottom: "150px" }}
            width="1400"
            height="500"
            src="https://www.youtube.com/embed/nWpxAPRG1U4?si=OAlLkgIZ1hA8iiYb"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <iframe
            style={{ paddingBottom: "150px" }}
            width="1400"
            height="500"
            src="https://www.youtube.com/embed/ThybOea6rZ0?si=w8Mmu7fZyy5bFmYy"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <iframe
            style={{ paddingBottom: "150px" }}
            width="1400"
            height="500"
            src="https://www.youtube.com/embed/jDFkAI_VrLA?si=FJMBYzRd9JvVqxZo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </Container>
    </>
  );
};
export default Orderdetail;
