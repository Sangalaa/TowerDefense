class AudioManager {
    constructor() {
        this.isMuted = false;
        this.sounds = [];
    }

    playSound(sound) {
        if(sound == undefined) return;
        if(this.isMuted) return;

        this.addSound(sound);
        
        sound.play();
    }

    playSoundInstanced(sound) {
        if(sound == undefined) return;
        if(this.isMuted) return;

        sound.cloneNode(true).play();
    }

    stopPlaying(sound) {
        if(sound == undefined) return;

        sound.pause();
    }

    stopPlayingAllSounds() {
        for(var index in this.sounds) {
            this.stopPlaying(this.sounds[index]);
        }
        this.sounds = [];
    }

    addSound(sound) {
        if(this.sounds.indexOf(sound) == -1) {
            this.sounds.push(sound);

            sound.addEventListener("ended", function() {
                var index = this.sounds.indexOf(sound);
                if(index >= 0) this.sounds.splice(index, 1);
            }.bind(this));
         }
    }
}