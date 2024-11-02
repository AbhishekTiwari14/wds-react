export function UserCard({name, phoneNumber, age, address}: {name: string, phoneNumber: string, age: number, address: string}) {
    return (
        <div className="card">
    <h2 className="name">{name}</h2>
    <div className="body">
      <div className="label">Age:</div>
      <div>{age}</div>
      <div className="label">Phone:</div>
      <div>{phoneNumber}</div>
      <div className="label">Address:</div>
      <div>{address}</div>
    </div>
  </div>
    )
}

// Create a UserCard function component that takes in name, phoneNumber, age, and address props and has the same HTML as the user.html file.
// Pass the user information into the UserCard component from the App.jsx file
// Try manually changing the data in the user.json file to test that everything is hooked up properly
// Repeat steps 4-6 but with a class component instead of a function component