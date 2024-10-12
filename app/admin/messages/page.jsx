"use client";

import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import _ from "lodash";

import { getMessages, login } from "@/lib/httpservices";

const columns = [
	{ field: "name", headerName: "Name", width: 150 },
	{ field: "subject", headerName: "Subject" },
	{ field: "email", headerName: "Email", width: 150 },
	{ field: "phone", headerName: "Phone Number" },
	{
		field: "created_at",
		headerName: "Date Recieved",

		type: "Date",
	},
	{ field: "message", headerName: "Message", flex: 1 },
];

const paginationModel = { page: 0, pageSize: 10 };

const Messages = () => {
	const [messages, setMessages] = useState([]);
	const [error, setError] = useState("");
	const [isFetchingMessage, setIsFetchingMessage] = useState(false);

	useEffect(() => {
		const fetchMessages = async (params) => {
			setIsFetchingMessage(true);

			const result = await getMessages();
			if (result?.status === 200) {
				setMessages(result.data);
			}

			if (result?.status != 200) {
				setError(result.data);
			}

			setIsFetchingMessage(false);
		};

		fetchMessages();
	}, []);

	const sortedMessage = _.sortBy(messages, function (o) {
		return -o.id;
	});

	return (
		<div className="">
			<h1 className="text-4xl font-bold mb-3 ">Recieved Messages</h1>
			{isFetchingMessage ? (
				<p>Loading...</p>
			) : sortedMessage.length < 1 ? (
				<p className="font-bold text-xl text-gray-800">No Message available</p>
			) : (
				<Paper sx={{ width: "100%" }} className="bg-neutral-100 ">
					<DataGrid
						rows={sortedMessage}
						columns={columns}
						initialState={{ pagination: { paginationModel } }}
						pageSizeOptions={[5, 10]}
						slots={{
							toolbar: GridToolbar,
						}}
					/>
				</Paper>
			)}
		</div>
	);
};

export default Messages;
