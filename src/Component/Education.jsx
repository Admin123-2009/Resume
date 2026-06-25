function Education() {
  return (
    <div
      id="education"
      style={{
        padding: "80px 10%",
        backgroundColor: "#F5F3FF",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#6B21A8",
          marginBottom: "40px",
        }}
      >
        Education
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            borderLeft: "5px solid #7C3AED",
          }}
        >
          <h2
            style={{
              margin: "0 0 8px 0",
              color: "#333",
            }}
          >
            Diploma in Cloud Computing & Big Data
          </h2>

          <p
            style={{
              margin: "0",
              color: "#666",
            }}
          >
            Bhausaheb Vartak Polytechnic
          </p>

          <p
            style={{
              marginTop: "8px",
              color: "#888",
              fontSize: "14px",
            }}
          >
            2022 - 2025
          </p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            borderLeft: "5px solid #7C3AED",
          }}
        >
          <h2
            style={{
              margin: "0 0 8px 0",
              color: "#333",
            }}
          >
            10th Standard
          </h2>

          <p
            style={{
              margin: "0",
              color: "#666",
            }}
          >
            Dr. N.P Shah English Medium School
          </p>

          <p
            style={{
              marginTop: "8px",
              color: "#888",
              fontSize: "14px",
            }}
          >
            Completed in 2022
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;