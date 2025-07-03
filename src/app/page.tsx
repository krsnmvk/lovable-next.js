import { caller } from '@/trpc/server';

export default async function Home() {
  const greeting = await caller.hello({ text: 'krisno mukti' });

  return <div className="p-4">{JSON.stringify(greeting, null, 2)}</div>;
}
