import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function TopNavigation() {
  let storeObj = useSelector((store) => {
    return store.reducer;
  });
  let navigate = useNavigate();

  useEffect(() => {
    if (storeObj && storeObj.loginDetails && storeObj.loginDetails.email) {
    } else {
      navigate("/");
    }
  }, []);
  return (
    <nav>
      <Link to="/">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/leaves">Leaves</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/">SignOut</Link>
    </nav>
  );
}

export default TopNavigation;
