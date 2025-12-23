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
                onKeyUp={handleKeyPress}>
              </input>
              <button className="btn btn-outline" onClick={() => {}}>
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
