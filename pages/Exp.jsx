import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "rgb(215, 237, 238)" }}>
      <Navbar />

      <div className="vstack m-4 d-flex justify-content-center">
        <div
          className="m-4 d-flex justify-content-center fw-bold fs-2"
          style={{ color: "rgb(245, 174, 41)" }}
        >
          <p1>PROJECT AND EXPERIENCE</p1>
        </div>
        <div className="m-3 row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img src="Images/image0.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5
                  className="card-title fw-bold"
                  style={{ color: "darksalmon" }}
                >
                  Scratch Game
                </h5>
                <p className="card-text">
                  I'm a Design Header who think the demo of this game and
                  design,draw,paint all of character and UI game of this scratch
                  game project.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="Images/unknown.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5
                  className="card-title fw-bold"
                  style={{ color: "darksalmon" }}
                >
                  Programing Project
                </h5>
                <p className="card-text">
                  I'm a Design Header who make the program more beautiful and
                  easier to use. The name of program is "Sorce prik", the
                  program is about backup and allocating files in your computer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="Images/IMG_6782.JPG"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5
                  className="card-title fw-bold"
                  style={{ color: "darksalmon" }}
                >
                  Keyboardist in HUMAN X ENTANEER CONCERT 2022
                </h5>
                <p className="card-text">
                  I was audition to be keyboardist of 1st year Entaneer band.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <br />
    </div>
  );
}
