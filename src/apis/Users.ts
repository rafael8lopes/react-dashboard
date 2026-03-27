const API_DOMAIN = "https://jsonplaceholder.typicode.com";
const USERS_PATH = "/users";

export type UserGeo = {
	lat: string;
	lng: string;
};

export type UserAddress = {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: UserGeo;
};

export type UserCompany = {
	name: string;
	catchPhrase: string;
	bs: string;
};

export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: UserAddress;
	phone: string;
	website: string;
	company: UserCompany;
};

type GetAllUsersOptions = {
	signal?: AbortSignal;
};

export const getAllUsers = async (options: GetAllUsersOptions = {}): Promise<User[]> => {
	const response = await fetch(`${API_DOMAIN}${USERS_PATH}`, {
		method: "GET",
		signal: options.signal,
	});

	if (!response.ok) {
		throw new Error("Failed to fetch users");
	}

	return (await response.json()) as User[];
};