import React, {useState} from "react";
import {connect} from "react-redux";

import {addTask} from "../redux";

function FormContainer(props) {
	const [itemValue, setItemValue] = useState("");

	const handleSubmitAndResetForm = ev => {
		ev.preventDefault();

		props.handleaddTask(itemValue, props.bucketName);
		setItemValue("");
	};

	const handleItemChange = ev => setItemValue(ev.target.value);

	return (
		<form autoComplete="on" onSubmit={handleSubmitAndResetForm}>
			<div className="form_row">
				<input
					type="text"
					className="new_todo_input"
					placeholder="Add to do..."
					aria-label="Todo item description"
					value={itemValue}
					onChange={handleItemChange}
					autoFocus
				/>

				<button
					type="submit"
					className="btn btn_addtodo"
					disabled={!itemValue}
					aria-label="Add todo item"
				>
					Add
				</button>
			</div>
		</form>
	);
}

const mapDispatchToProps = dispatch => ({
	handleaddTask: (itemValue, bucketName) =>
		dispatch(addTask(itemValue, bucketName)),
});

export default connect(null, mapDispatchToProps)(FormContainer);
