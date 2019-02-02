var e = this;

AWSC.use("uab", function(t, n) {
    "loaded" === t ? e.__uab = n : "timeout" === t && (e.__uab = "timeout")
     start()
});



var token = "1541047443539200504750871549095055341796";
var uaoption = {
    Flag: 2980046,
    GPInterval: 50,
    MPInterval: 4,
    MaxFocusLog: 6,
    MaxGPLog: 1,
    MaxKSLog: 14,
    MaxMCLog: 12,
    MaxMPLog: 5,
    MaxMTLog: 500,
    MaxNGPLog: 1,
    MaxTCLog: 12,
    MinMTDwnLog: 30,
    OnlyHost: 1,
    SendInterval: 5,
    SendMethod: 8,
    api: 1,
    font: 1,
    hook: 1,
    sIDs: ["_n1t|_n1z|nocaptcha|-stage-1"],
};


function start() {
    n = e.__uab.getUA(uaoption);
    url = 'http://cf.aliyun.com/nocaptcha/analyze.json?a=SY0F&t='+ token + '&n=' + n + '&p=%7B%22ncSessionID%22%3A%222ca2fe6d2cf9d6%22%7D&scene=bbs&asyn=0&lang=cn&v=948';
    console.log(url);
}



// &n=115#1KHQxf1O1Ta0NxIkGfnD1Csoh51GKoNM1gq6Aiysc5x1V0GCFH6HSC9SED5CIvvKtv/8yoiQi7WJU4U4AWNcaLpbyW1QOSAyeKT4ukNQi/W5hZz4OkdDGkGEOZPQAylPeKC5sYQ/i/JJhUU4OWGcaLpXyrrQ9sfre9Yz1NjcXfnSSYoR9MCL1FGYdPYMTT9cxCNRlGg0kxHucjHqecTI1K7VbXMKmrP6gaKSKTuIwg+bzEp9RhBpDpMYQtFYuG7vWduKW/LsF0rDUqwp+uXIQvtl0z9gVciFmS7pYi7tWg0f2ZEu4EZh+3EXhyp0HgJeFg7U7aMjZ/naOYrb7CraQgS80xH4oz2aK25WuxJrxKdkrCyeepviQbCIyw97FaJVsssf9VLRzC0E7xLBVBecs0ow3PyuLlgTshYNSkPRsv/9fl27ufI305OXqylkUbgsYH9/I7iPWbEZWK6fXh/ALBnDW1P8YQU6DFtyMpjHGfIGZ5==
// &n=115%231vVvl51O1TaDDoNkGfFm1Csoh51GKoNM1gq6Aiysc5x1V0GCFH6HSC9SEV8OIvveG6%2F8yrJGi%2FRChaU8udfcaLpXyrrQ9sfletT4ukZQgQWRhZz8AWd0aLBXOZPjXvhletT8DkZQgaQ5V7a8AkNDaTBXkzFQASAPet%2F4skZQibJdhfX%2FmZcIryr7211plCOZPMBCwN7lTCg%2FXaLqNovKhhqGYJ9jzpfrsdp%2Bnof8Fw2d0lXFiTBhuPVprbvS3WXZIXt8wao6bCqu1Ojpc1KRjgho%2BILafdALCTEiknfAL8Z84blGORBCkOz3jdtn7%2FIS%2F2jOFo1HiBc3jOXmrZSpMi%2FS0nvgNJbWpebcWcMhRi3MwR3taX4DK6km4g10r48ay6hjuIOfW9i%2BP2hBTAqrv678KXwUMkABaAlHQ9X5B3TNV8YMVRXJf%2BmqcYXI00UmQtGfUK1awl6%2FHTJJ8Fe0GioleulktH7aTnEyQowC1K%2FJ1LZRrJMKmrP6gapSq4FE4oZCmUdwTxv%2F0kQP5S%2BwSCHs3u9W1gtgDg4J1XUj4JaVKQkxsWd37ylo1QUcm7n8FHRP9IDrdyKiR0jfl6INoCENrygLBXBOUe8r72vuX2zfZactjuUCewGoOseh5PJSNfwowc649VAWCd9basDw05HNbQDJDzOiLoyzMMey%2FuuTY2EDZS5dY6%2BWjktGpBWtB1uWLhBRHy%2F6KtHAeAVRMGGVpnlyWGa4je1GJLdNEcM4lcFayT%2Bwpi9eZphO5Gs0uDpDlqJKxCYZRUL9dHLMB1Qd87Hu1Gcznf%2BOTv2M4Be7ieadLox4


