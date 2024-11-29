import { useEffect, useState } from "react";
import { getInspirations, addInspiration } from "../services/api";
import InspirationList from "../components/InspirationList";

function InspirationPage() {
  const [inspirations, setInspirations] = useState([]);
  const [newInspiration, setNewInspiration] = useState("");

  useEffect(() => {
    getInspirations().then(setInspirations);
  }, []);

  const handleAddInspiration = async () => {
    await addInspiration({ title: newInspiration, description: "New Idea" });
    setInspirations(await getInspirations());
    setNewInspiration("");
  };

  return (
    <div>
      <h1>Inspiration Management</h1>
      <input
        value={newInspiration}
        onChange={(e) => setNewInspiration(e.target.value)}
        placeholder="Add inspiration"
      />
      <button onClick={handleAddInspiration}>Add</button>
      <InspirationList inspirations={inspirations} />
    </div>
  );
}

export default InspirationPage;
