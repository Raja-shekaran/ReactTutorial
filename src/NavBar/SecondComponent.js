export default function SecondComponent(props) {
  //Conditional rendering
  return (
    <div>
      {props.name !== "" ? (
        <p>Hi {props.name}</p>
      ) : (
        <p>Please Enter your name</p>
      )}
    </div>
  );
}
