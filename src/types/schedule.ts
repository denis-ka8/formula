type RaceDate = string;

export interface ISchedule {
	round: number;
	year: number;
	country: string;
	grandPrix: string;
	dateStart: RaceDate;
	dateEnd: RaceDate;
	raceTrackUrl: string;
}

export interface IScheduleDetail extends ISchedule {
	freePractice1: RaceDate;
	freePractice2: RaceDate;
	freePractice3: RaceDate;
	qualifying: RaceDate;
	race: RaceDate;
  photo: string;
  description: string;
}
