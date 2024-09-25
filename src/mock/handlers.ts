import { http, HttpResponse } from "msw";
import { news } from "./news";
import { teams } from "./teams";
import { driverCreateSuccess } from "./driver";

export const handlers = [
	http.get(`/api/news`, () => HttpResponse.json(news)),
	http.get(`/api/teams`, () => HttpResponse.json(teams)),
	http.post(`/api/driver/create`, () => HttpResponse.json(driverCreateSuccess)),
];
