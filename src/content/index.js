(function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/test_db_connection');
  xhr.send(null);

  xhr.onreadystatechange = () => {
    var DONE = 4;
    var OK = 200;
    var FAIL = 500;

    var dbStatus = document.getElementById('database-status');
    if (xhr.readyState == DONE) {
      if (xhr.status == OK)
        dbStatus.innerHTML = 'Success!';
      else if (xhr.status == FAIL)
        dbStatus.innerHTML = xhr.responseText;
    }
  };
})();
