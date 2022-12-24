const compareTime = ( timeString1, timeString2) => {
    const datetime1 = new Date(timeString1);
    const datetime2 = new Date(timeString2);
    return (datetime2.getTime() <  datetime1.getTime())
}

module.exports = {
    compareTime
}