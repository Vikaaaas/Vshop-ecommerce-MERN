import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Container } from "react-bootstrap";
import "./bootstrap.min.css";
const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome to VShop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
