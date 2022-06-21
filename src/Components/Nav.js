const menu = [
  {
    name: "식물검색",
  },
  {
    name: "식물필터",
  },
  {
    name: "매거진",
  },
];

export default function Nav() {
  return (
    <div className = "">
      <ul>
        {menu.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
