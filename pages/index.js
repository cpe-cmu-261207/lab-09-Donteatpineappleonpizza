import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "rgb(215, 237, 238)" }}>
      <Navbar />
      <div>
        <br />
        <div className="d-flex justify-content-center align-content-sm-center">
          <div
            className="m-3  align-content-sm-center gap-2 border-0 rounded-3 p-2 shadow-sm
 justify-content-sm-center"
            style={{
              backgroundImage: "url(Images/BWW.jpg)",
              backgroundSize: "cover",
              width: "600px",
              height: "350px",
              borderColor: "white",
            }}
          >
            <div
              className="m-4 d-flex justify-content-center fw-bold fs-2"
              style={{ color: "rgb(71, 191, 212)" }}
            >
              <p1>PROFILE</p1>
            </div>

            <div
              className="d-flex align-content-sm-center "
              style={{ alignItems: "center" }}
            >
              <div className="mx-4 vstack gap-2">
                <img
                  src="Images/IMG_1980.jpg"
                  className="rounded-circle"
                  width="180"
                  height="180"
                />
              </div>

              <div className="vstack mx=auto" style={{ textAlign: "left " }}>
                <div
                  className="fw-bold fs-5"
                  style={{ width: "90%", color: "rgb(194, 94, 0)" }}
                >
                  Winittra Saengsroy
                </div>
                <div style={{ width: "90%" }}>
                  <p3>Nickname :</p3> Aomzin
                  <br /> <p3>Age :</p3> 21 years old
                  <br /> <p3>Major :</p3> Computer Engineering
                  <br /> <p3>University :</p3> Chiangmai University
                  <br /> <p3>Hobby :</p3> Listen to music, play a game.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="vstack d-flex justify-content-center ">
        <div
          className="my-auto fs-4 fw-bold"
          style={{ color: "rgb(236, 178, 18)" }}
        >
          <br />{" "}
          <div className="m-4 d-flex justify-content-center fw-bold fs-2">
            <p2>MY SKILLS</p2>
          </div>
        </div>
        <div className="card-group m-sm-5 ">
          <div className="d-flex m-2 card border border-2 rounded-3 p-2 shadow-sm">
            <img
              src="Images/1.png"
              className="card-img-top rounded-3"
              alt="..."
            />
            <div className="card-body">
              <h5
                className="card-title fw-bold"
                style={{ color: "darksalmon" }}
              >
                Playing Musicians
              </h5>
              <p className="card-text">
                - Piano <br /> - Keyboard <br /> - Guitar
              </p>
            </div>
          </div>
          <div className="d-flex m-2 card border border-2 rounded-3 p-2 shadow-sm">
            <img
              src="Images/2.png"
              className="card-img-top rounded-3"
              alt="..."
            />
            <div className="card-body">
              <h5
                className="card-title fw-bold"
                style={{ color: "rgb(240, 192, 61)" }}
              >
                Coding
              </h5>
              <p className="card-text">
                - C++ <br /> - Html <br /> - Css
              </p>
            </div>
          </div>
          <div className="d-flex m-2 card border border-2 rounded-3 p-2 shadow-sm">
            <img
              src="Images/3.png"
              className="card-img-top rounded-3"
              alt="..."
            />
            <div className="card-body">
              <h5
                className="card-title fw-bold"
                style={{ color: "rgb(26, 143, 51)" }}
              >
                Drawing
              </h5>
              <p className="card-text">
                - Digital Drawing <br /> - Water Color Painting <br /> - Design
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <br />
    </div>
  );
}
