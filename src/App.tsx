import { Outlet } from 'react-router-dom';

function handleKeyPress(event) {
  // 엔터 키의 키코드는 13입니다.
  if (event.keyCode === 13) {

  }
}

function App({}) {
  return (
    <>
      <div className="header">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" id="title">
              라이 컨텐츠 다운로더
            </a>
            <div className="d-flex" role="search">
              <input
                id="searchInput"
                className="form-control me-2"
                type="search"
                placeholder="검색"
                aria-label="Search"
                onKeyUp={handleKeyPress}>
              </input>
              <button className="btn btn-outline-primary" onClick={() => {}}>
                Search
              </button>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
      
    </>
  );
}

export default App;
