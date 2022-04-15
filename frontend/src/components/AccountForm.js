import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AccountForm = (options) => {
	const [res, setRes] = useState({
		username: "",
		password: "",
	});

	let navigate = useNavigate();

	const [error, setError] = useState(false);
	const [loginError, setLoginError] = useState(false);
	const [submit, setSubmit] = useState(false);
	const [login, setLogin] = useState(false);

	useEffect(() => {
		if (submit) {
			return navigate("/");
		}

		if (login) {
			return navigate("/Home", { state: { username: res.username } });
		}
	});

	const handleUsernameChange = (event) => {
		event.persist();
		setRes((res) => ({
			...res,
			username: event.target.value,
		}));
	};

	const handlePasswordChange = (event) => {
		event.persist();
		setRes((res) => ({
			...res,
			password: event.target.value,
		}));
	};

	const handleSubmit = () => {
		//check data
		console.log("Submit res form:", res);

		if (options.formType === "register") {
			axios
				.post("http://127.0.0.1:8000/api/registration", {
					username: res.username,
					password: res.password,
				})
				.then(function (response) {
					console.log(response);
					setSubmit(true);
				})
				.catch(function (error) {
					//setError(true);
					if (error.response) {
						console.log(error.response.data);
					} else if (error.request) {
						console.log(error.request.data);
					} else if (error.message) {
						console.log(error.message.data);
					}
				});
		}
		if (options.formType === "login") {
			axios
				.get("http://127.0.0.1:8000/api/registration")
				.then(function (response) {
					let matches = response.data.filter(
						(item) =>
							item.username === res.username && item.password === res.password
					);
					if (matches.length > 0) {
						setLogin(true);
					} else {
						setLoginError(true);
						setError(false);
					}
				})
				.catch(function (error) {
					setError(true);
					setLoginError(false);
					if (error.response) {
						console.log(error.response.data);
					} else if (error.request) {
						console.log(error.request.data);
					} else if (error.message) {
						console.log(error.message.data);
					}
				});
		}
	};

	return (
		<div className="grid-cols-1 min-h-screen bg-slate-800">
			<div className="grid place-items-center">
				<section className="w-10/12 bg-slate-600 p-4">
					<div className="flex text-white text-lg font-semibold space-x-4 my-2">
						<div className="w-20  flex justify-end">Username</div>
						<input
							id="username"
							type="text"
							name="username"
							value={res.username}
							placeholder="enter a username"
							className="w-full px-1 placeholder:italic text-black"
							onChange={handleUsernameChange}
						/>
					</div>

					<div className="flex text-lg font-semibold space-x-4">
						<div className="w-20 text-white flex justify-end">Password</div>
						<input
							id="password"
							type="password"
							name="password"
							value={res.password}
							placeholder="enter a password"
							className="w-full px-1 placeholder:italic text-black"
							onChange={handlePasswordChange}
						/>
					</div>

					<div className="flex justify-end py-3 space-x-3">
						<Link to="/">
							<button className="bg-green-300 px-3 py-2 font-semibold hover:bg-purple-300 transition ease-in duration-200 text-lg">
								BACK
							</button>
						</Link>
						<button
							onClick={handleSubmit}
							className="bg-yellow-300 px-3 py-2 font-semibold hover:bg-cyan-300 transition ease-in duration-200 text-lg"
						>
							SUBMIT
						</button>
					</div>
				</section>
				{error && (
					<div className="w-10/12 bg-red-300">
						An error occurred. Please try again.{" "}
					</div>
				)}
				{loginError && (
					<div className="w-10/12 bg-red-300">
						{" "}
						Invalid credentials. Please try again.{" "}
					</div>
				)}
			</div>
		</div>
	);
};

export default AccountForm;
