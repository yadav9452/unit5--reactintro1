function Skills() {
  const skill = ["mern", "dsa", "html", "design"];
  return (
    <div>
      {skill.map((e) => {
        return <p className="redtext">skill: {e}</p>;
      })}
    </div>
  );
}

export default Skills;
