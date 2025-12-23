/**두 개의 속성을 동시에 검색어를 이용하여 필터링하는 함수
 * 
 * @param {Array} data - 필터링할 데이터 배열
 * @param {string} searchTerm - 검색어
 * @param {string} property1 - 비교하고자 하는 첫 번째 속성의 이름
 * @param {string} property2 - 비교하고자 하는 두 번째 속성의 이름
 * @returns {Array} - 검색어가 포함된 속성 값 중 하나 이상을 갖는 항목들의 배열
 */
function filterItems(data:JSON, searchTerm:String, property1:String, property2:String):JSON {
  return data.filter(item =>
    item[property1].toLowerCase().includes(searchTerm.toLowerCase()) || item[property2].toLowerCase().includes(searchTerm.toLowerCase())
  );
}

