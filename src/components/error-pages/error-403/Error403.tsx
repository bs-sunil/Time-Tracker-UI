import "./Error403.css";
import { useNavigate } from "react-router-dom";
import { roleWiseUserNavigation } from "../../utils/CommonFn";

const Error403 = () => {
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
              <div className="error-container">
                <span>4</span>

                <span>
                  <span className="screen-reader-text">0</span>
                </span>

                <span>3</span>
              </div>

              <div>
                <h3 className="">Forbidden!!</h3>

                <p className="">
                  You do not have permission to access requested page.
                </p>

                <a
                  className="link_403"
                  onClick={() => {
                    const navigateUrl = roleWiseUserNavigation();
                    navigate(`${navigateUrl}`);
                  }}
                >
                  <i className="fa fa-dashboard"></i> Back to Dashboard
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Error403;
