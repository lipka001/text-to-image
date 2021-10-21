import {
  ChangeEvent,
  FormEvent,
  useState,
} from "react";
import axios from "axios";

const CREATE_PICTURE_URL = "https://aestheticwebapp20211020181613.azurewebsites.net/api/CreatePicture";

type Image = {
  ImageBase64: string;
}

function useConverter() {
  const [value, setValue] = useState("");
  const [base64, setBase64] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      axios.get<Image>(CREATE_PICTURE_URL, { params: { text: value } })
        .then((response) => {
          const { ImageBase64 } = response?.data;

          setBase64(ImageBase64);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  return [
    value,
    base64,
    handleChange,
    handleSubmit,
  ] as const;
}

export default useConverter;
