export default function Page() {
  return (
    <div style={{
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection:'column',
      height:'100vh',
      gap:'2vh'}}>
      <h1>Welcome to my App</h1>
      <button style={{
        width:'30vw',
        height:'10vh',
      }}>Randy</button>
      <button style={{
        width:'30vw',
        height:'10vh',
      }}>Blablabla</button>
    </div>
  )
}