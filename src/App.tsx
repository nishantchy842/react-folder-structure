import Layout from "./components/layout";
import { AboutUs } from "./pages/aboutUs";
import HomePage from "./pages/home";

function App() {
  return (
    <Layout>
      {/** define route here or can make another  route folder/component to make app component clean */}
      <HomePage />
      <AboutUs />
    </Layout>
  );
}

export default App;
