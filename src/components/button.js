function Button() {
  const food = "pizza";
  const age = 12;
  // const age=12
  return (
    <div>
      fav food is {food} and your age is {age}
      <div>you are {age > 11 ? "eligible" : "Not Eligible"}</div>
    </div>
  );
}
export default Button;
