import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <>
      {/* <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Nosotros</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Contacto</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Sucursales</Nav.Link>
        </Nav.Item>
      </Nav>
      <hr/> */}
      <div class="container">
  <div class="row">
    <div class="col-md my-2">
    Nosotros
    </div>
    <div class="col-md my-2">
      Medicos
    </div>
    <div class="col-md my-2">
      Servicios
    </div>
  </div>
</div>
      </>
      )
  }
      export default NavBar;