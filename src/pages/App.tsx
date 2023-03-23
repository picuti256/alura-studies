import React, { useState } from "react";
import Cronometro from "../components/Cronometro";
import Form from "../components/Form";
import List from "../components/List";
import { ITask } from "../types/task";
import style from "./App.module.scss";

function App() {
	const [tasks, setTask] = useState<ITask[]>([]);
	return (
		<div className={style.AppStyle}>
			<Form setTask={setTask} />
			<List tasks={tasks} />
			<Cronometro />
		</div>
	);
}

export default App;
