import styles from './App.module.css'
import Display from './Components/Display.jsx'
import ButtonCompo from './Components/ButtonsCompo.jsx'
function App() {
  return (
    <>
    <div className={styles.calculator}>
      <Display/>
      <ButtonCompo/>
      
    </div>
      
    </>
  )
}
export default App;