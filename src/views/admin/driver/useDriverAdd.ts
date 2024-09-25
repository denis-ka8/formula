import { useState } from "react";
import { IDriverAddInfo } from "../../../types/driver";
import { useAddDriverMutation } from "../../../api/driver";

interface IUseDriverAddProps {
	firstName: string;
	lastName: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleAddClick: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void;
	addError: boolean;
}

export const useDriverAdd = (): IUseDriverAddProps => {
	const [driverInfo, setDriverInfo] = useState<IDriverAddInfo>({
		firstName: "",
		lastName: "",
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setDriverInfo((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const [addDriver, { isError: addError }] = useAddDriverMutation();

	const handleAddClick = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		addDriver(driverInfo);
	};

	const { firstName, lastName } = driverInfo;
	return { firstName, lastName, handleChange, handleAddClick, addError };
};
