import React, {useState} from "react";
import {connect} from "react-redux";

import {completeTask} from "../redux";
import PropertyBarContainer from "./PropertyBarContainer";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquare, faCheckSquare} from "@fortawesome/free-solid-svg-icons";

function FormItemContainer(props) {
	const [displayMenu, setDisplayMenu] = useState(false);

	const updateDisplayMenu = bool => {
		if (displayMenu !== bool) {
			setDisplayMenu(bool);
		}
	};

	const specialClassName = props.item.completed ? "done_list" : "not_done_list";

	return (
		<li className={`list_Class`}>
			<div
				className="item_content"
				onClick={() => props.handlecompleteTask(props.item)}
			>
				<span>
					{props.item.completed ? (
						<FontAwesomeIcon icon={faCheckSquare} />
					) : (
						<FontAwesomeIcon icon={faSquare} />
					)}
				</span>
				<span className={`list_content ${specialClassName}`}>
					{props.item.value}
				</span>
			</div>

			<PropertyBarContainer id={props.item.id} />
		</li>
	);
}

const mapDispatchToProps = {
	handlecompleteTask: completeTask,
};

export default connect(null, mapDispatchToProps)(FormItemContainer);
