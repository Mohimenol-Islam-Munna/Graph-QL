import { Routes, Route, Link, useParams } from "react-router-dom";
import useCustomer from "../apolloClient/useCustomers";

const Customers = () => {
  const [fetchCustomersData, { loading, error, data }] = useCustomer();
  console.log("data asche :: ", data);

  if (loading) {
    console.log("data asche 2 :: ", loading);
    return <h2>Loading...</h2>;
  }

  return (
    <Routes>
      <Route
        path=""
        element={
          <div style={{ width: "60%", margin: "10px auto" }}>
            <div>
              <button onClick={fetchCustomersData}>Fetch Customer</button>
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
                  <h3>Title : {employee.title}</h3>
                  <h4>Name : {employee.firstName + " " + employee.lastName}</h4>
                  <p>
                    Address :{" "}
                    {employee.address &&
                      employee.address.city + " , " + employee.address.country}
                  </p>

                  <div style={{ margin: "20px auto" }}>
                    <Link to={`${employee.employeeID}`}>Details</Link>
                  </div>
                </div>
              ))}
          </div>
        }
      />
    </Routes>
  );
};

export default Customers;
