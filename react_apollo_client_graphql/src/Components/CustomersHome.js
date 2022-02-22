import React from "react";
import { Link } from "react-router-dom";
import useCustomer from "../apolloClient/useCustomers";

const CustomersHome = () => {
  const [fetchCustomersData, { loading,data }] = useCustomer();

  return (
    <div style={{ width: "60%", margin: "10px auto" }}>
      <div>
        <h5 onClick={fetchCustomersData}>
          {loading ? "Fetching Customer List..." : "Customer List"}
        </h5>
        {!data && (
          <button onClick={fetchCustomersData} className="btn btn-primary">
            Fetch Customer
          </button>
        )}
      </div>

      {data &&
        data.viewer.employeeList.map((employee) => (
          <div
            style={{
              border: "1px solid salmon",
              margin: "5px",
              padding: "5px",
              borderRadius: "10px",
            }}
            key={employee.employeeID}
          >
            <h4>Title : {employee.title}</h4>
            <h5>Name : {employee.firstName + " " + employee.lastName}</h5>
            <p>
              Address :{" "}
              {employee.address &&
                employee.address.city + " , " + employee.address.country}
            </p>

            <div style={{ margin: "20px auto" }}>
              <Link to={`${employee.employeeID}`} className="btn btn-info">
                Details
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CustomersHome;
