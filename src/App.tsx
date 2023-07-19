import './App.css';
import Button from './components/Button';
// import Status from './components/Status';
// import ArrayProps from './components/Array_Props';
// import Heading from './components/Heading';
// import Oscar from './components/Oscar';
// import Greeting from './components/Greeting';
// import Person from './components/Person';
// import PersonList from './components/PersonList';


function App() {

  // const usersArray = [
  //   { name: 'John Doe', age: 30, email: 'john.doe@example.com' },
  //   { name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' },
  //   // Add more user objects as needed
  // ];

  // const PersonName = {
  //   first: 'Bruce',
  //   last: 'Wayne'
  // }

  // const namelist = [
  //   {
  //     first: 'Bruce',
  //     last: 'Wayne'
  //   },
  //   {
  //     first: 'Clark',
  //     last: 'kent'
  //   },
  //   {
  //     first: 'Princess',
  //     last: 'Diana'
  //   },
  // ]

  return (
    <div className="App">
      {/* <Greeting name="Aung Naing Tun" messageCount={40} isLoggedIN={true} />
      <Person name={PersonName} />
      <PersonList names={namelist}/>
      <ArrayProps users={usersArray} />
      <Status status="success" />
      <Heading>This is Heading</Heading>
      <Oscar>
        <Heading>Oscar bar bar nyar nyar</Heading>
      </Oscar> */}

      <Button handleClick={()=>{
        console.log('Button Clicked')
      }}/>

    </div>
  );
}

export default App;
