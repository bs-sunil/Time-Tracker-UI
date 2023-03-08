import { roleWiseUserNavigation } from "../../utils/CommonFn";
import "./Error500.css";
import { useNavigate } from "react-router-dom";

const Error500 = () => {
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
                <span>5</span>

                <span>
                  <span className="screen-reader-text">0</span>
                </span>

                <span>0</span>
              </div>

              <div>
                <h3 className="">Internal Server Error</h3>

                <p className="">
                  The server encountered an internal error or misconfiguration
                  and was unable to complete your request.
                </p>

                <a
                  className="link_403"
                  onClick={() => {
                    const navigateUrl = roleWiseUserNavigation();
                    navigate(`${navigateUrl}`);
                  }}
                >
                  Go Back
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Error500;
