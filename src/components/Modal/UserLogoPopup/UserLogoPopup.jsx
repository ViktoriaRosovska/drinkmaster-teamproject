export default function UserLogoPopup({ onBackdropClose }) {
  return (
    <div
      style={{
        width: '500px',
        height: '500px',
        backgroundColor: 'yellow',
        color: 'black',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
      }}
    >
      Hello World!
      <button onClick={() => onBackdropClose()}>Close Modal</button>
    </div>
  );
}
