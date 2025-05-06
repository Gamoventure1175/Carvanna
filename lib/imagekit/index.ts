import { parsedEnv } from "@/validation/custom/env";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: parsedEnv.IMAGEKIT_PUBLIC_KEY,
  privateKey: parsedEnv.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: parsedEnv.IMAGEKIT_URL_ENDPOINT,
});

export default imagekit;
