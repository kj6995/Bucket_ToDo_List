import React from "react";
import {connect} from "react-redux";
import FormContainer from "./FormContainer";
import FormEditContainer from "./FormEditContainer";
import FormItemContainer from "./FormItemContainer";

function ContentContainer(props) {
	return (
		<div className="container_bucket">
			<div className="bucket_header">
				<span className="bucket_header_name">{props.value}</span>
				<FormContainer bucketName={props.value} />
			</div>
			{props.items.length ? (
				<div className="row justify-content-center">
					<ul className="list-group content__todos__ul">
						<div>
							{props.items.map((item, index) => (
								<div key={index} className="content__todos__li">
									{props.editingItem.id === item.id &&
									props.value === item.bucketName ? (
										<FormEditContainer item={item} />
									) : (
										<div>
											{props.value === item.bucketName ? (
												<FormItemContainer item={item} />
											) : null}
										</div>
									)}
								</div>
							))}
						</div>
					</ul>
				</div>
			) : null}
		</div>
	);
}

const mapStateToProps = state => ({
	items: state.items,
	editingItem: state.editingItem,
});

export default connect(mapStateToProps)(ContentContainer);
