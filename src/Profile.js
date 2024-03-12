import Avatar from "./Avatar";
import { people } from "./data";

export default function Profile({ person, size }) {
  return (
    <Card>
      <h2>{person.name}</h2>
      <Avatar person={person} size={size} />
      <Recognitions recognitionArray={person.recognitions} />
    </Card>
  );
}

function Card({ children }) {
  return <section className="profile">{children}</section>;
}

function Recognitions({ recognitionArray }) {
  const itemList = recognitionArray.map((item) => (
    <li key={item.title}>
      <b>{item.title}</b>
      {item.description}
    </li>
  ));
  return <ul>{itemList}</ul>;
}

export function ProfileList({ profession, exclude }) {
  let peopleArray;
  if (exclude) {
    peopleArray = people.filter((figure) => figure.profession !== profession);
  } else {
    peopleArray = people.filter((figure) => figure.profession === profession);
  }

  const profileList = peopleArray.map((figure) => {
    return (
      <li key={figure.id}>
        <Avatar person={figure} size={50} />
        <p>
          <b>{figure.name}</b>
          {" " + figure.profession + " "} known for{" "}
          {" " + figure.accomplishment + " "}
        </p>
      </li>
    );
  });

  return (
    <Card>
      <ul>{profileList}</ul>
    </Card>
  );
}
