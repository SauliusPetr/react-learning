export function AlertButton({ message }) {
  function sendAlertMessage() {
    alert(message);
  }
  return (
    <CustomEventButton handleClick={sendAlertMessage}>
      trigger alert
    </CustomEventButton>
  );
}

export function SendEmail({ messageTo }) {
  function sendEmailAlert() {
    alert(`Email sent to ${messageTo}`);
  }

  return (
    <>
      <CustomEventButton handleClick={sendEmailAlert}>
        Send Email
      </CustomEventButton>
    </>
  );
}
export function Toolbar({ onClikToolbar }) {
  return (
    <div
      onClick={() => alert("Toolbar alert!")}
      style={{ backgroundColor: "gray" }}
    >
      <CustomEventButton handleClick={() => alert("play movie alert!")}>
        play movie
      </CustomEventButton>
      <CustomEventButton handleClick={() => alert("plaing asong alert!")}>
        play song
      </CustomEventButton>
    </div>
  );
}
function CustomEventButton({ handleClick, children }) {
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleClick();
        }}
      >
        {children}
      </button>
    </>
  );
}
