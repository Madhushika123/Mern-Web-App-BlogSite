import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://i.pinimg.com/736x/51/74/64/517464955f9bbc5400bf59f8b33eecfa--desktop-wallpapers-hd-wallpaper.jpg"
        alt=""
      />
    </div>
  );
}
