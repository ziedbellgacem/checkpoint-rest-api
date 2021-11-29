import "./Home.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Link to="/ListUsers">
        {" "}
        <h1>Go To Users List</h1>
      </Link>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/topend-system-unit-for-gaming-computer-close-up-picture-id1314343964?b=1&k=20&m=1314343964&s=170667a&w=0&h=WpeiIvHcjWFXjiPdgkmiNZ0ZNT2JmPDCSKddJSo8C2Y="
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/topend-system-unit-for-gaming-computer-close-up-picture-id1314343964?b=1&k=20&m=1314343964&s=170667a&w=0&h=WpeiIvHcjWFXjiPdgkmiNZ0ZNT2JmPDCSKddJSo8C2Y="
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2FtaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Home;
