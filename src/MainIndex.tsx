import { useState } from "react";
import MainComponent from "./component/MainComponent";
import Navbar from "./component/Navbar";
import Pricing from "./component/Pricing";
import OurTeam from "./component/OurTeam";

const MainIndex: React.FC = () => {
  const [mode, setMode] = useState(false);
  return (
    <>
      <Navbar mode={mode} setMode={setMode} />
      <MainComponent mode={mode} setMode={setMode} />
      <Pricing />
      <OurTeam />
    </>
  );
};

export default MainIndex;
