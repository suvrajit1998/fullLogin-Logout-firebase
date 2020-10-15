import React, { useState } from "react";

import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../context/Authcontext";
import { Link, useHistory } from "react-router-dom";

const Dashboard = () => {
  const [error, setError] = useState("");
  const history = useHistory();

  const { currentUser, logOut } = useAuth();

  const handleLogOut = async () => {
    setError("");
    history.push("/login");
    try {
      await logOut();
    } catch {
      setError("Failed to Log Out");
    }
  };

  return (
    <>
      <Card>
        <h2 className="text-center mb-4">Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email: </strong>
        {currentUser.email}
        <Link to="update-profile" className="btn btn-primary w-100 mt-3">
          Update Profile
        </Link>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogOut}>
          Log Out
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
