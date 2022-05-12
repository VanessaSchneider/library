function Logout ({ handleLogout }) {
  return (
    <header>
      <button
        type='button'
        className='logout-button'
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  )
}

export default Logout
