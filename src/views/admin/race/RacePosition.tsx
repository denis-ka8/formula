import { useState, useEffect, ChangeEvent, ChangeEventHandler } from "react";

interface AdminRacePositionProps {
	position: number;
}

export const AdminRacePosition: React.FC<AdminRacePositionProps> = ({
	position,
}) => {
	const pointsSystem = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

	const [points, setPoints] = useState(0);
	const [driverId, setDriverId] = useState("0");

	useEffect(() => {
		setPoints(pointsSystem[position] || 0);
	}, []);

	const handleFastestLapChange = (event: ChangeEvent<HTMLInputElement>) => {
		let val = event.target.checked;
	};

	const handleDriverChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;
		setDriverId(value);
	};

	return (
		<tr>
			<td>{position + 1}</td>
			<td>
				<select onChange={handleDriverChange} value={driverId}>
					<option value="0">Select</option>
					<option value="1">Max</option>
					<option value="2">Lewis</option>
				</select>
			</td>
			<td>
        
			</td>
			<td>
				<input
					type="radio"
					name="fastest-lap"
					onChange={handleFastestLapChange}
				/>
			</td>
			<td>{points}</td>
		</tr>
	);
};
