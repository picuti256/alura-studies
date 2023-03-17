import React from "react";
import Button from "../Button";
import style from "./Form.module.scss";

class Form extends React.Component {
	state = {
		task: "",
		time: "00:00",
	};

	addTask(e: React.FormEvent) {
		e.preventDefault();
		console.log("State: ", this.state);
	}
	render() {
		return (
			<form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
				<div className={style.inputContainer}>
					<label htmlFor="task">Adicione um novo estudo</label>
					<input type="text" name="task" id="task" value={this.state.task} onChange={(e) => this.setState({ ...this.state, task: e.target.value })} placeholder="O que você quer estudar?" required />
				</div>
				<div className={style.inputContainer}>
					<label htmlFor="time">Tempo</label>
					<input type="time" step="1" id="time" name="time" value={this.state.time} onChange={(e) => this.setState({ ...this.state, time: e.target.value })} min="00:00:00" max="01:30:00" required />
				</div>

				<Button text="Adicionar" />
			</form>
		);
	}
}

export default Form;
