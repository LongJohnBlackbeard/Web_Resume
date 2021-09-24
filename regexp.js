function RegFunction() {
    const str = document.getElementById("string").value;

    const reg = new RegExp(document.getElementById("regexp").value);

    const result = reg.test(str);

    document.getElementById("result").value = result;

}