import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);
  const teamStyle = {
    border: "2px solid purple",
    margin: "20px",
    borderRadius: "20px",
    padding: "20px",
  };

  const handleAdded = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };
  const handleRemove = () => {
    setTeam(team - 1);
  };

  const handleReset = () => {
    setTeam(0);
  };

  return (
    <div style={teamStyle}>
      <h3>Player: {team} </h3>
      <button onClick={handleAdded}>Add</button>
      <button onClick={handleRemove}>Remove</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
