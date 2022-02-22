import React from "react";
import useOrderSubscription from "../../apolloClient/subscriptions/useOrderSubscription";

const ProductSubscription = () => {
    const { loading, error, data } = useOrderSubscription();

    console.log("get loading by subscription ::", loading);
    console.log("get error by subscription ::", error);
    console.log("get data by subscription ::", data);

    return <div>ProductSubscription</div>;
};

export default ProductSubscription;
