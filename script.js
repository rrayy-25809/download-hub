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

function searchJSON(){
  const value = document.getElementById('inputField').value;
  console.log(value);
  // fetchData 함수 호출
  fetchData()
  .then(data => {
    // 검색 테스트
    const searchResult =data.filter(item => item["title"].includes(value));
    console.log('Search Result:', searchResult);
  })
  .catch(error => console.error('Error:', error));
}

// fetchData 함수 호출
fetchData()
  .then(data => {
    var contents = document.getElementById("contents");

    data.forEach(item => {
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
