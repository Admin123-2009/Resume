function Skills() {
  const skills = [
    "HTML",
    "JavaScript",
    "React",
    "Java",
    "C",
    "C++",
    "Python",
    "UI/UX Design Basics",
  ];

  return (
    <div
      id="skills"
      style={{
        padding: "80px 10%",
        backgroundColor: "#EFE6FF",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#6B21A8",
          marginBottom: "50px",
        }}
      >
        My Skills
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(200px,1fr))",
          gap: "25px",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill}
            style={{
              backgroundColor: "white",
              padding: "25px",
              textAlign: "center",
              borderRadius: "15px",
              boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#7E22CE" }}>
              {skill}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;