function writeCookie() {
    if (document.myform.customer.value == "") {
        alert ("Enter some value!");
        return;
    }

    cookieValue = escape(document.myform.customer.value) + ";";
    document.cookie = "name = " + cookieValue
    document.write ("Setting Cookies: " + " name = " + cookieValue);

}