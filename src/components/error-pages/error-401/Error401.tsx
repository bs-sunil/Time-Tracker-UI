import React from "react";
import { useNavigate } from "react-router-dom";
import { clearSession } from "../../../services/auth.service";
export default function Error401() {
  const navigate = useNavigate();
  return (
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

              <span>1</span>
            </div>

            <div>
              <h3 className="">You are not authorised!!</h3>

              <p className="">Access allowed only for authorised user.</p>

              <a
                className="link_403"
                onClick={() => {
                  navigate("/");
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
  );
}
