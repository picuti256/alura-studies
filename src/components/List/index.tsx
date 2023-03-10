import Item from "./Item";
import style from "./List.module.scss";

function List() {
	const tasks = [
		{
			task: "React",
			time: "02:00:00",
		},
		{
			task: "Typescript",
			time: "01:00:00",
		},
		{
			task: "Node.JS",
			time: "03:00:00",
		},
	];
	return (
		<aside className={style.listaTarefas}>
			<h2>Estudos do dia</h2>
			<ul>
				{tasks.map((task, index) => (
					<Item key={index} {...task} />
				))}
			</ul>
		</aside>
	);
}

export default List;
