function Hackathon() {
  return (
    <div
      id="hackathon"
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
        Hackathon Participation
      </h1>

      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {/* Top Section */}
        <h2
          style={{
            marginBottom: "10px",
            color: "#6B21A8",
          }}
        >
          Team Project Experience
        </h2>

        <p
          style={{
            marginBottom: "20px",
            color: "#555",
          }}
        >
          Participated in a hackathon and worked with a team to
          build solutions for real-world problems.
        </p>

        {/* Bottom Info Blocks */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1",
              minWidth: "200px",
              backgroundColor: "#F5F3FF",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <h4 style={{ margin: "0 0 5px 0", color: "#6B21A8" }}>
              Role
            </h4>
            <p style={{ margin: 0, color: "#555" }}>
              Team Contributor
            </p>
          </div>

          <div
            style={{
              flex: "1",
              minWidth: "200px",
              backgroundColor: "#F5F3FF",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <h4 style={{ margin: "0 0 5px 0", color: "#6B21A8" }}>
              Skills Gained
            </h4>
            <p style={{ margin: 0, color: "#555" }}>
              Teamwork, Problem Solving
            </p>
          </div>
        </div>
      </div>
         {/* Certificate Box */}
      <div
  style={{
    marginTop: "20px",
    backgroundColor: "#a949c1",
    borderRadius: "15px",
    padding: "25px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  }}
>
  <h3
    style={{
      marginBottom: "15px",
      color: "#07030a",
    }}
  >
    Certificate
  </h3>

  <img
    src="/certificate.jpeg" alt="Certificate"
    alt="Hackathon Certificate"
    style={{
      width: "100%",
      maxWidth: "600px",
      borderRadius: "10px",
      border: "1px solid #ddd",
    }}
  />
    <img
    src="/certifi2.jpg" alt="Certificate"
    alt="Hackathon Certificate"
    style={{
      width: "100%",
      maxWidth: "600px",
      borderRadius: "10px",
      border: "1px solid #ddd",
    }}
  />
</div>
    </div>
 

  );
}

export default Hackathon;