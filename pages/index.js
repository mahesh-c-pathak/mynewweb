export default function Home() {
  const createTest = async () => {
    const randomNum = Math.floor(Math.random() * 1000);
    const res = await fetch('/api/test/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `Test ${randomNum}`,
        email: `test${randomNum}@test.com`,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h1>My new web</h1>
      <br />
      <button onClick={createTest}>Create Test</button>

    </div> 
  )
}
