import { ITask } from "../../types/task";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
	task: ITask[];
	selectTask: (selectTask: ITask) => void;
}

function List({ task, selectTask }: Props) {
	return (
		<aside className={style.listaTarefas}>
			<h2>Estudos do dia</h2>
			<ul>
				{task.map((task) => (
					<Item selectTask={selectTask} key={task.id} {...task} />
				))}
			</ul>
		</aside>
	);
}

export default List;
