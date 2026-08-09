import React, { useEffect } from "react";

const About = () => {
  let interval = setInterval(() => {
    console.log("interval is running");
  }, 1000);

  useEffect(() => {
    console.log("useeffect is running");
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>This is about</h1>
    </div>
  );
};

export default About;
