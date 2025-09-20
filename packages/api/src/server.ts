import { createYoga } from 'graphql-yoga';
import { schema } from './schema'; // Your Pothos schema
import { createServer } from 'http';

const yoga = createYoga({
  schema,
  logging: true,
});

const server = createServer(yoga);

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`GraphQL Yoga running at http://localhost:${PORT}/graphql`);
});
