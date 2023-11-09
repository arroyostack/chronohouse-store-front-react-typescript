import { Navigation } from "./routes/NavigationAndRoutes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
}

export default App;
