function Header({page, pageHandler}) {
  return (
    <header>
      <button onClick={pageHandler}>Go to {page === "Home" ? "About" : "Home"}</button>
    </header>
  )
}

export default Header;