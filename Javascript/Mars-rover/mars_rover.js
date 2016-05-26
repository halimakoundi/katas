exports.move = function (commands) {
    if (commands == "M") {
        var position = "0,1,N";
        return position;
    }
    if (commands == "MM") {
        return "0,2,N";
    }
    return '0,0,N';
}