import React, {useState} from "react";
import {connect} from "react-redux";

import {cancelEditTask, editTask} from "../redux";

function FormEditContainer(props) {
	const [itemValue, setItemValue] = useState(props.item.value);

	const handleItemChange = ev => setItemValue(ev.target.value);

	const handleEditAndResetForm = ev => {
		ev.preventDefault();

		props.handleeditTask({
			...props.item,
			value: itemValue,
		});

		setItemValue("");
	};
	return (
		<li className="listitem_edit_container">
			<form method="POST" onSubmit={handleEditAndResetForm}>
				<input
					type="text"
					className="edit_item"
					value={itemValue}
					onChange={handleItemChange}
					autoFocus
				/>

				<button type="submit" className="btn btn_update" disabled={!itemValue}>
					Update
				</button>
				<button
					type="button"
					className="btn btn_cancel"
					onClick={props.handleCanceleditTask}
				>
					Cancel
				</button>
			</form>
		</li>
	);
}

const mapDispatchToProps = {
	handleCanceleditTask: cancelEditTask,
	handleeditTask: editTask,
};

export default connect(null, mapDispatchToProps)(FormEditContainer);
