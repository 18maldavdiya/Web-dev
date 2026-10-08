
function App() {

  return (
    <>
      <center class="to-do-container">
        <h1>TO DO APP</h1>
        <div class="container text-center">
          <div class="row">
            <div class="col-6">
              <input type="text" placeholder='enter task' />
            </div>
            <div class="col-4">
              <input type='date' />
            </div>
            <div class="col-2">
              <button class='btn btn-primary'>Add</button>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              Buy milk
            </div>
            <div class="col-4">
              10/11/2026
            </div>
            <div class="col-2">
              <button class='btn btn-danger'>Delete</button>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              Sleep
            </div>
            <div class="col-4">
              10/12/2026
            </div>
            <div class="col-2">
              <button class='btn btn-danger'>Delete</button>
            </div>
          </div>
        </div>
      </center>
    </>
  )
}

export default App
