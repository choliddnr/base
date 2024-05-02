import Pocketbase from "pocketbase";
import type Client from "pocketbase";

export const usePocketbase = (url: string): Client => {
  // if (!url) return new Pocketbase(process.env.pb);
  return new Pocketbase(url);
};
