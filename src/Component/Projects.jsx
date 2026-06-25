function Projects() {
  return (
    <div
      id="projects"
      style={{
        padding: "80px 10%",
        backgroundColor: "#F5F3FF",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#6B21A8",
          marginBottom: "50px",
        }}
      >
        Projects
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            backgroundColor: "#3b0244",
            width: "320px",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ color: "#cf94e3" }}>
            TechZone Website
          </h2>

          <p>
            Technology-focused website with a clean design and responsive layout.
          </p>

          <p>
            <b>React • HTML • CSS</b>
          </p>

          <a
            href="https://techniqo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "8px 16px",
              backgroundColor: "#9b69ac",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
            }}
          >
            View Website
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;