import { useLocation } from "react-router-dom";

export default function Update() {
	const location = useLocation();

	return <div className="text-black text-3xl text-center">{location.state.username}</div>;
}
