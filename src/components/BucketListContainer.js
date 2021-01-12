import React, {useState} from "react";
import {connect} from "react-redux";
import ContentContainer from "./ContentContainer";
import {addBucket} from "../redux";

function BucketListContainer(props) {
	const [itemValue, setItemValue] = useState("");

	const handleSubmitAndResetForm = ev => {
		ev.preventDefault();
		props.handleaddBucket(itemValue);
		setItemValue("");
	};

	const handleItemChange = ev => setItemValue(ev.target.value);

	return (
		<div className="container">
			<form autoComplete="on" onSubmit={handleSubmitAndResetForm}>
				<input
					type="text"
					className="create-bucket"
					name="new-todo-item"
					placeholder="Type name of a Bucket.."
					aria-label="Bucket Description"
					value={itemValue}
					onChange={handleItemChange}
					autoFocus
				/>

				<button
					type="submit"
					className="btn-bucket"
					disabled={!itemValue}
					aria-label="Add bucket item"
				>
					Add Bucket
				</button>
			</form>

			{props.bucketName.map((value, index) => (
				<div key={index}>
					<ContentContainer value={value} />
				</div>
			))}
		</div>
	);
}

const mapStateToProps = state => ({
	bucketName: state.bucketName,
});

const mapDispatchToProps = dispatch => ({
	handleaddBucket: bucketValue => dispatch(addBucket(bucketValue)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BucketListContainer);
