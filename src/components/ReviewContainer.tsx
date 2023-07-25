/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import Review from "./Review";
import { useParams } from "react-router-dom";
import { useGetSingleBookReviewQuery } from "../redux/features/cart/cartApi";

export default function ReviewContainer() {
  const {id} = useParams();
  const {data} = useGetSingleBookReviewQuery(id)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {" "}
      {data?.data?.map((review: string, index: React.Key | null | undefined) => (
        <Review key={index} review={review} bookId={""} id={""} userEmail={""} />
      ))}
    </div>
  );
}
