import React from "react";

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-info text-white text-center">
              <h3>Welcome to the Dashboard!</h3>
            </div>
            <div className="card-body">
              <p className="text-center">
                This is a protected route. Only logged-in users can access this page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
