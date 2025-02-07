function preformsearch() {
  var searchquery = document.getElementById('searchinput').value;
  var searchresultsiframe = document.getElementById('search-results-iframe');
  var bingsearchurl = 'https://www.bing.com/search?q=' + encodeURIComponent(searchquery);

  searchresultsiframe.src = bingsearchurl;
}
