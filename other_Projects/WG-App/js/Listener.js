window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
    /*this.window.localStorage.clear();*/
});