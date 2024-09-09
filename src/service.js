export const getCookie = (name) => {
    var cookieValue = null;
    console.log(document.cookie);
    if (document.cookie && document.cookie !== "") {
        var cookies = document.cookie.split(";");
        console.log(cookies);
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === name + "=") {
                cookieValue = decodeURIComponent(
                    cookie.substring(name.length + 1)
                );
                break;
            }
        }
    }
    return cookieValue;
};

export const setCSRFToken = async () => {
    let cookie = getCookie("csrftoken");
    if (document.cookie !== "" || cookie === null) {
        cookie = await fetch("http://localhost:8000/get_csrf_token");
    }
};
