import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

import MerchBody from "../../components/MerchBody/MerchBody";
import LoaderComp from "../../components/Loader";

export default function Merch(props) {
  const [loading, setLoading] = useState(true);
  setInterval(() => setLoading(false), 4000);
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <title>Aorthar | Merch</title>
      </Helmet>
      {loading ? (
        <LoaderComp />
      ) : (
        <Container fluid className="whitebg">
          <MerchBody props={props} />
        </Container>
      )}
    </>
  );
}
