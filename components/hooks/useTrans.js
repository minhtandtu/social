import { useRouter } from "next/router";
import en from "../../public/lang/en.js";
import vi from "../../public/lang/vi.js";

const useTrans = () => {
  const { locale } = useRouter();

  const trans = locale === "en" ? en : vi;

  return trans;
};
export default useTrans;
