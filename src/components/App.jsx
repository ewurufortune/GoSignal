import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function contactCard(contact){
return <Card 
key={contact.key}
name={contact.name}
  img= {contact.imgURL}
  tel= {contact.phone}
  mail= {contact.email}
/>
}

function App() {
  
  return (
    <div>
{contacts.map(contactCard)}
    </div>
  );
}

export default App;
