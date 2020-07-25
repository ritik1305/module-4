/*
Solution of assignment 4:

Expected output:

Hello Ritik
Good Bye Akash
Good Bye Kuldeep
Good Bye Heramb
Hello Pranmya
Hello Choudhary
Hello Aman
Hello Bhargav
Hello Aijaz
Good Bye Arman
*/

(function() {
    var names = ["Ritik", "Akash", "Kuldeep", "Heramb", "Pranmya", "Choudhary", "Aman", "Bhargav", "Aijaz", "Arman"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'a') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
