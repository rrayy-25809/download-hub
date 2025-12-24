import { Outlet } from 'react-router-dom';
import type { KeyboardEvent } from 'react';

function handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
  // Enter 키 처리
  if (event.key === 'Enter') {
    // TODO: 검색 동작 추가
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
                onKeyUp={handleKeyPress}
              ></input>
              <button className="btn btn-outline" onClick={() => {}}>
                Search
              </button>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2025 RRAYY(Taejun Ham)
          </span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#" aria-label="Youtube">
              <i className="bi bi-youtube"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
