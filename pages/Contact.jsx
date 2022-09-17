import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "rgb(248, 247, 221)" }}>
      <Navbar />

      <div className="d-flex justify-content-center">
        <div
          className="p-3 m-3 border-0 rounded-2 shadow-sm justify-content-center"
          style={{
            backgroundImage: "url(Images/BWW.jpg)",
            backgroundSize: "cover",
            width: "700px",
            height: "330px",
            alignContent: "center",
          }}
        >
          <div
            className=" fw-bold fs-4 text-center"
            style={{ color: "rgb(71, 191, 212)" }}
          >
            <p2>CONTACT ME !</p2>
          </div>
          <div className="hstack gap-3">
            <div className="m-3">
              <img
                src="Images/IMG_1980.jpg"
                className="rounded-circle"
                width="180"
                height="180"
              />
            </div>

            <div
              className="text-left "
              style={{ backgroundColor: "rgb(240, 249, 255)" }}
            >
              <p1>Name :</p1> Winittra Saengsroy
              <br /> <p1>Nickname :</p1> Aomzin
              <br /> <p1>Address :</p1> 6 Suthep rd. Amphoe Muang, Chiang Mai,
              Thailand 50200
              <br /> <p1>Facebook :</p1>
              <a href="https://www.facebook.com/aomzkp" target="_blank">
                https://www.facebook.com/aomzkp
              </a>
              <br /> <p1>Email :</p1>
              <a href="mailto:winittra_saengsroy@cmu.ac.th">
                winittra_saengsroy@cmu.ac.th
              </a>
              <br /> <p1>Phone :</p1> 092-555-6331
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <br />
    </div>
  );
}
