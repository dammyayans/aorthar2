import React, { useState } from "react";

import TheTeamBanner from "./TheTeamBanner";
import TeamLeads from "./TeamLeads";
import GetStarted from "../../components/GetStarted/GetStarted";
import LoaderComp from "../../components/Loader";

export default function TheTeam() {
  const [loading, setLoading] = useState(true);
  setInterval(() => setLoading(false), 4000);
  return (
    <>
      {loading ? (
        <LoaderComp />
      ) : (
        <div className="whitebg">
          <TheTeamBanner />
          <TeamLeads />
          <GetStarted />
        </div>
      )}
    </>
  );
}
