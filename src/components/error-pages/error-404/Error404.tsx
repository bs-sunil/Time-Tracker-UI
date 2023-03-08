import "./Error404.css";
import { useNavigate } from "react-router-dom";
import { clearSession } from "../../../services/auth.service";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ maxWidth: "100%", overflow: "hidden" }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="card text-center shadow p-3 mb-5 bg-white rounded"
              style={{ marginTop: 95 }}
            >
              {/* <div className="error-container">
                <span>4</span>

                <span>
                  <span className="screen-reader-text">0</span>
                </span>

                <span>4</span>
              </div> */}
              <div style={{ textAlign: "center" }}>
                <img
                  className="logo-404"
                  src={require("../../../assets/images/error-404.webp")}
                />
              </div>

              <div style={{ marginTop: -50 }}>
                {/* <h3 className="">Page Not Found</h3> */}

                <p className="">The page you are looking for not available!</p>

                <a
                  className="link_403"
                  onClick={() => {
                    navigate("/signin");
                    clearSession();
                  }}
                >
                  <i className="fa fa-lock"></i> Go to Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Error404;
