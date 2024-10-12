import axios from "axios";

const url = process.env.BACKEND_URL;

// const fetchToken = async () => {
// 	const storedToken = localStorage.getItem("token");
// 	const getToken = await login();

// 	return storedToken ? storedToken : getToken?.access;
// };

export const getMessages = async () => {
	const token = localStorage.getItem("token");

	try {
		const result = await axios.get(url + "sleecetech/messages/", {
			headers: {
				Authorization: `JWT ${token}`,
			},
		});
		return result;
	} catch (error) {
		return error?.response ? error?.response : error;
	}
};

export const login = async (formData) => {
	try {
		const result = await axios.post(url + "auth/jwt/create/", formData);
		localStorage.setItem("token", result.data.access);
		return result;
	} catch (error) {
		return error?.response ? error?.response : error;
	}
};

export const loggedInUser = async () => {
	const storedToken = localStorage.getItem("token");

	if (storedToken) {
		try {
			const { status } = await axios.post(url + "auth/jwt/verify", {
				token: storedToken,
			});

			if (status === 200) {
				const result = await axios.get(url + "auth/users/me/", {
					headers: {
						Authorization: `JWT ${storedToken}`,
					},
				});
				return result;
			}

			if (status != 200) {
				localStorage.removeItem("token");
			}
		} catch (error) {
			return error?.response ? error?.response : error;
		}
	} else {
		return { status: 404, data: { message: "No stored token available" } };
	}
};
