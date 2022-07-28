import './App.css';

function App() {
  return (
    <div className="App">

      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">React JS</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Accueil</a>
              </li>  
              <li class="nav-item">
                <a class="nav-link" href="#">Documentation</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Contact</a>
              </li>
            </ul>
            <form class="d-flex" role="search">  
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div class="container mt-5">
        <h1>Contact Us  !</h1>

        <form class="row g-3">
          <div class="col-md-6">
            <label for="firstName" class="form-label"></label>
            <input type="text" class="form-control" id="firstName" placeholder="First Name" required/>
          </div>
          <div class="col-md-6">
            <label for="lastName" class="form-label"></label>
            <input type="text" class="form-control" id="lastName" placeholder="Last Name" required/>
          </div>
          <div class="col-md-8">
            <label for="emailInfo" class="form-label"></label>
            <input type="email" class="form-control" id="emailInfo" placeholder="E-mail" required/>
          </div>
          <div class="col-md-4">
            <label for="phoneNumber" class="form-label"></label>
            <input type="text" class="form-control" id="phoneNumber" placeholder="+(XXX) XXX-XX-XX"/>
          </div>
          <div class="col-md-12">
            <label for="comments" class="form-label"></label>
            <textarea class="form-control" id="comments" rows="3" required placeholder="..."></textarea>
          </div>
          <div class="col-md-12">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default App;
