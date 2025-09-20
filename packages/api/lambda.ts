type User = {
  id: string;
  name: string;
  email?: string;
};

// Dummy data for testing
const users: User[] = [
  { id: "1", name: "Alice", email: "alice@example.com" },
  { id: "2", name: "Bob", email: "bob@example.com" },
];

export const main = async (event: any) => {
  console.log("GraphQL Event:", JSON.stringify(event, null, 2));

  const { fieldName, arguments: args } = event;

  switch (fieldName) {
    case "user":
      return users.find((u) => u.id === args.id) || null;

    case "listUsers":
      return users;

    default:
      throw new Error(`Resolver for field ${fieldName} not implemented`);
  }
};
