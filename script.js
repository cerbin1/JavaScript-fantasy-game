$('#startGame').on('click', function () {
    var playerNameInput = $('#playerName');
    var playerName = playerNameInput.val();
    if (playerName !== undefined && typeof playerName.valueOf() === "string" && playerName.length >= 3) {
        var player = new Player(playerName);
        if (player === undefined) {
            throw "Error while creating new Player!";
        }
        else {
            console.log("Game started. Your name is: " + player.getName);
            playerNameInput.removeClass('is-invalid');
        }
    }
    else {
        playerNameInput.addClass('is-invalid');
    }
});