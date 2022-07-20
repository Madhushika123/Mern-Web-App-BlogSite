import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Animals Lover</span>
        <span className="headerTitleLg">Blog </span>
      </div>
      <img
        className="headerImg"
        src="https://media.istockphoto.com/photos/large-group-of-african-safari-animals-wildlife-conservation-concept-picture-id1209602332?k=20&m=1209602332&s=612x612&w=0&h=1kD50LQUUoE0bV0Cnt2ChHeY_E7_IPIxazTAspo8y1g="
        alt=""
      />
    </div>
  );
}
