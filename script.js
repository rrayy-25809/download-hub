// JSON 데이터를 가져오는 함수
function fetchData() {
  return new Promise((resolve, reject) => {
    fetch('contents.json') // 데이터가 있는 URL이나 파일 경로를 넣어주세요
      .then(response => response.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

// 두 개의 속성을 동시에 검색어를 이용하여 필터링하는 함수
function filterItems(data, searchTerm, property1, property2) {
  return data.filter(item => 
    item[property1].toLowerCase().includes(searchTerm.toLowerCase()) ||
    item[property2].toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// fetchData 함수 호출 및 검색어에 따라 HTML 동적 생성
function renderContent(searchTerm = "") {
  fetchData()
    .then(data => {
      var contents = document.getElementById("contents");
      contents.innerHTML = ""; // 기존 내용 초기화
      var filteredData = filterItems(data, searchTerm,"title","description");
      filteredData.forEach(item => {
        var contentDiv = document.createElement("div");
        contentDiv.classList.add("content");
        contentDiv.classList.add("mb-3");

        var img = item.img || ''; // JSON 데이터의 이미지 경로
        var title = item.title || "";
        var description = item.description || "";
        var link = item.link || '';

        var HTML = `<img src="${img}" class="img rounded" alt="...">
            <div class="conts-main">
              <h3>${title}</h3>
              <p>${description}</p>
              <a class="btn btn-primary" href="${link}" role="button">Download</a>
            </div>`;
        contentDiv.innerHTML = HTML;
        contents.appendChild(contentDiv);
      });
    })
    .catch(error => console.error('Error:', error));
}

function handleKeyPress(event) {
  // 엔터 키의 키코드는 13입니다.
  if (event.keyCode === 13) {
    // Enter 키를 눌렀을 때 search 함수 호출
    search();
  }
}

function search(){
  var searchTerm = document.getElementById('searchInput').value;
  renderContent(searchTerm);
}

// 초기 페이지 로드시 모든 데이터를 표시
renderContent();