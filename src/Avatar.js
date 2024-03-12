import { getImageUrl } from "./utils";
export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, size <= 90 ? "s" : "b")}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
