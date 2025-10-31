function AlertButton({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}

export default function Toolbar() {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Alert Buttons</h2>

      <AlertButton onSmash={() => alert("Playing Movie!")}>
        Play Movie
      </AlertButton>

      <AlertButton onSmash={() => alert("Uploading Image!")}>
        Upload Image
      </AlertButton>
    </div>
  );
}
