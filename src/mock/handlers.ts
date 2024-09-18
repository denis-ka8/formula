import { http, HttpResponse } from "msw";
import { news } from "./news";

export const handlers = [http.get(`/api/news`, () => HttpResponse.json(news))];
