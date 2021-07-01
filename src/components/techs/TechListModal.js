import React, { useEffect, useState } from "react";
import TechItem from "./TechItem";

function TechListModal() {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("/techs");
    const data = await res.json();

    setTechs(data);
    setLoading(false);
  };

  useEffect(() => {
    getTechs();
  }, []);

  //   if (loading) {
  //     return <h1>Loading</h1>;
  //   }

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Tech List</h4>
        <ul className="collection">
          {!loading && techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
}

export default TechListModal;
