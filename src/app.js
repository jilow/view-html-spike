console.log("Hello world!")

function fetchInvoice(addHeader) {
  // Create new request
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    // On 200 response from server
    if (this.readyState == 4 && this.status == 200) {
      // Set the innerHTML of the invoice DIV tag
      let invoiceHtml = this.responseText
      document.getElementById("invoice").innerHTML = invoiceHtml;
    }
  };
  xhttp.open("GET", "http://localhost/invoice", true);
  // Only applicable when cookie is set on requested domain
  xhttp.withCredentials = true;
  // If addHeader is true, then set request header to send
  !!addHeader && xhttp.setRequestHeader('x-csrf', 'foo');  
  // Send AJAX request
  xhttp.send();
}

fetchInvoice(false);
fetchInvoice(true);