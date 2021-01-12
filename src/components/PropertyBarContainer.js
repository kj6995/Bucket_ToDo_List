import React from "react";
import {connect} from "react-redux";
import {deleteTask, selectEditTask} from "../redux";

function PropertyBarContainer(props) {
	return (
		<span className="edit_delete_btn">
			<button
				className="btn edit_btn"
				onClick={() => props.handleSelecteditTask(props.id)}
			>
				Edit
			</button>
			<button
				className="btn del_btn"
				onClick={() => props.handledeleteTask(props.id)}
			>
				Delete
			</button>
		</span>
	);
}

const mapDispatchToProps = {
	handledeleteTask: deleteTask,
	handleSelecteditTask: selectEditTask,
};

export default connect(null, mapDispatchToProps)(PropertyBarContainer);
