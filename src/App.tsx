import { SnackBar } from "./components/alert";
import Layout from "./components/layout";
import { AboutUs } from "./pages/aboutUs";
import HomePage from "./pages/home";
import { Testimonial } from "./pages/testimonial";

function App() {
  return (
    <Layout>
      <SnackBar />
      {/** define route here or can make another  route folder/component to make app component clean */}
      <HomePage />
      <AboutUs />
      <Testimonial />
    </Layout>
  );
}

export default App;
