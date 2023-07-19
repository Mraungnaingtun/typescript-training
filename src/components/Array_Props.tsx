type User = {
    name: string;
    age: number;
    email: string;
  };
  
  type MyComponentProps = {
    users: User[];
  };
const ArrayProps : React.FC<MyComponentProps> = ({users}) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.email}>
          <h1>{user.name}</h1>
          <p>{`Age: ${user.age}`}</p>
          <p>{`Email: ${user.email}`}</p>
        </div>
      ))}
    </div>
  )
}

export default ArrayProps