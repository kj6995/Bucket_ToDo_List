import {Provider} from "react-redux";
import store from "./redux/store";
import "./App.css";
import BucketListContainer from "./components/BucketListContainer";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<BucketListContainer />
			</div>
		</Provider>
	);
}

export default App;
