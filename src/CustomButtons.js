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

function CustomEventButton({ handleClick, children }) {
  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}
