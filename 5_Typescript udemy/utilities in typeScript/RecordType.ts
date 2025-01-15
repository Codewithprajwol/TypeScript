//Record <Keys, Type>

type Roles="author" |"editor" |"researcher";

interface User{
    name:string;
    email:string;
    age:number;
}

interface Article {
    title: string;
    content: string;
    contributors: Record<Roles, User>;
  }
  
  const article: Article = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: "Duis est urna, eleifend at malesuada id, suscipit eu",
    // Contributors can be type generated from Roles type and User interface
    contributors: {
      author: { name: "John", email: "john@email.com", age: 32 },
      editor: { name: "Frank", email: "frank@email.com", age: 36 },
      researcher: { name: "Mark", email: "mark@email.com", age: 36 },
    },
  };