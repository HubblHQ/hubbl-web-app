PLAYER_FRAME = '#playlist';
USER_SETTINGS_FRAME = '#settings';

USERNAME_BTN = '#username-btn';
BACK_BTN = '#arrow-back-btn';
MORE_BTN = '#more-btn';

PLAY_BTN = '#play-btn';
PAUSE_BTN = '#pause-btn';

PRELOAD_BAR = '#preload-bar';
PLAY_BAR = '#play-bar';

CUR_COVER = '#cur-cover';
CUR_TITLE = '#cur-title';
CUR_AUTHOR = '#cur-author';

class ScreenState {

    constructor(frame) {
        this.curFrame = frame;
    }

    getCurFrame() {
        return this.curFrame;
    }

    setFrame(frame) {

        switch (frame) {
            case PLAYER_FRAME:
                $(BACK_BTN).hide();
                $(MORE_BTN).show();
                break;
            case USER_SETTINGS_FRAME:
                $(MORE_BTN).hide();
                $(BACK_BTN).show();
                break;
            default:
                alert('No such frame: ' + frame);
                return;
        }
        $(this.curFrame).hide();
        this.curFrame = frame;
        $(this.curFrame).show();
    }
}

var app = {};

var Header = function() {

};

Header.prototype.show = function() {
    
};


$(document).ready(function() {
    app = {
        dom: {
            header: $("#header"),
            content: $("#content"),
            player: $("#player")
        },
        tpl: {
            playlist: $.templates("#playlistTpl"),
            settings: $.templates("#settingsTpl")
        }
    };
    var data = {
        current: {cover: "https://avatars.yandex.net/get-music-content/49707/ece7fda7.a.3742024-1/50x50", title: "Guns N Roses - Blablaba", author: "Me"},
         tracks: [
             {cover: "https://avatars.yandex.net/get-music-content/49707/ece7fda7.a.3742024-1/50x50", title: "Guns N Roses - Blablaba", author: "Me"},
             {cover: "https://avatars.yandex.net/get-music-content/49707/ece7fda7.a.3742024-1/50x50", title: "Guns N Roses - Blablaba", author: "Me"},
             {cover: "https://avatars.yandex.net/get-music-content/49707/ece7fda7.a.3742024-1/50x50", title: "Guns N Roses - Blablaba", author: "Me"},
             {cover: "https://avatars.yandex.net/get-music-content/49707/ece7fda7.a.3742024-1/50x50", title: "Guns N Roses - Blablaba", author: "Me"}
         ]
     };

    $("#content").html(app.tpl.playlist.render(data));

    app.dom.header.show();
    app.dom.player.show();

    $(BACK_BTN).hide();
    $(USER_SETTINGS_FRAME).hide();
    $(PAUSE_BTN).hide();

    var state = new ScreenState(PLAYER_FRAME);

    $(USERNAME_BTN).click(function() {
        if (state.getCurFrame() != USER_SETTINGS_FRAME) {
            state.setFrame(USER_SETTINGS_FRAME);
        }
    });

    $(BACK_BTN).click(function() {
        switch (state.getCurFrame()) {
            case PLAYER_FRAME:
                alert('Cannot go back on player frame!');
                return;
            case USER_SETTINGS_FRAME:
                state.setFrame(PLAYER_FRAME);
                break;
        }
    });

    var playlist = new PlayList();
    playlist.add(new PlayListEntry(0, 'November Rain', 'Guns N\' Roses', 0, 'https://cs5-1v4.vk-cdn.net/p13/61db60f56b838e.mp3', 120, 0, 0, PLAYLIST_ENTRY_STATUS_ACCEPTED));

    var player = new Player(playlist);

    $(PLAY_BTN).click(function() { player.play() });

    $(PAUSE_BTN).click(function() { player.pause() });

    var updateFunction = function() { player.update() };
    var _intervalId = setInterval(updateFunction, 1000 / FPS);

});
