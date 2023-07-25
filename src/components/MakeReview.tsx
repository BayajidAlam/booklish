import { useParams } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { usePostReviewMutation } from "../redux/features/cart/cartApi";

export default function MakeReview() {

  const [inputValue, setInputValue] = useState<string>("");
  const [postReview, { isError }] = usePostReviewMutation();
  const id = useParams()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const options = {
      id: id.id,
      data: {
        review: inputValue,
        userEmail: "bayajidalam2001@gmail.com",
        userName: "Bayajid",
        bookId: id.id,
      },
    };
    console.log(options);
     postReview(options);
    setInputValue("");
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <textarea
          onChange={handleChange}
          className="h-40 w-96 p-4 border mt-6"
          name=""
          id=""
          placeholder="Your review"
        ></textarea>
      </div>
      <button className="btn btn-primary rounded-none my-6 font-bold text-lg">
        Submit
      </button>
    </form>
  );
}
