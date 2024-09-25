import { ISchedule } from "./schedule";

export interface IDriverPosition {
	position: number;
	driver: string;
	team: string;
	points: number;
}

export interface IRaceResult {
	round: ISchedule;
	positions: IDriverPosition[];
}
