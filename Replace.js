var Replace = function (text_string, char_find, char_replace) {
    char_replace = char_find !== undefined ? char_replace : ''
    var exists = false;
    if (text_string.indexOf(char_find) !== -1)
        exists = true;

    while (exists) {
        text_string = text_string.replace(char_find, char_replace);

        if (text_string.indexOf(char_find) !== -1)
            exists = true;
        else
            exists = false;
    }
}
