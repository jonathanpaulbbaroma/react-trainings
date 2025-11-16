function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  return (
    <Button onClick={() => alert(`Playing ${movieName}!`)}>
      Play "{movieName}"
    </Button>
  );
}

function UploadButton() {
  return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
}

export default function Toolbar1() {
  return (
    <div style={{ marginTop: "30px" }}>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}
