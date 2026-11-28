export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl bg-blue-500 bg-b text-white">Welcome to My Website</h1>
      <p className="mt-4 text-lg">This is my first edit in Next.js.</p>
      <h2 className="mt-8 text-2xl font-semibold">About Me</h2>
      <p className="mt-2 text-base">I am a web developer learning Next.js and building awesome web applications.</p>
      
      <h2 className="mt-8 text-2xl font-semibold">Contact</h2>
      <p className="mt-2 text-base">Feel free to reach out to me at <a href="mailto:example@email.com" className="text-blue-500 hover:underline">example@email.com</a></p>
    </main>
  );
}