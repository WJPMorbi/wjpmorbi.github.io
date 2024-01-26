const music = new Audio('1.mp3');
    // music.play();

    let masterPlay = document.getElementById("masterPlay");
    masterPlay.addEventListener("click", ()=>{
        if(music.paused || music.currentTime <= 0){
            music.play();
            masterPlay.classList.remove('ri-play-circle-fill');
            masterPlay.classList.add('ri-pause-circle-fill');
        }else{
            music.pause();
            masterPlay.classList.add('ri-play-circle-fill');
            masterPlay.classList.remove('ri-pause-circle-fill');
        }
    })

    let CurrentStart = document.getElementById('CurrentStart');
    let CurrentEnd = document.getElementById('CurrentEnd');
    let seek = document.getElementById("seek");
    let bar2 = document.getElementById("bar2");
    let dot = document.getElementsByClassName("dot")[0];

    music.addEventListener('timeupdate',() => {
        let music_curr = music.currentTime;
        let music_dur = music.duration;
        // console.log(music_curr);

        let min1 = Math.floor(music_dur / 60);
        let sec1 = Math.floor(music_dur % 60);
       
        if(sec1 < 10){
            sec1 = `0${sec1}`;
        }
        CurrentEnd.innerText = `${min1}:${sec1}`;

        let min2 = Math.floor(music_curr / 60);
        let sec2 = Math.floor(music_curr % 60);

        if(sec2 < 10){
            sec2 = `0${sec2}`;
        }

        CurrentStart.innerText = `${min2}:${sec2}`;

        let progressBar = parseInt((music_curr/music_dur)*100);
        seek.value = progressBar;
        let seekbar = seek.value;
         bar2.style.width = `${seekbar}%`;
         dot.style.left = `${seekbar}%`;
        
    });

    seek.addEventListener('change',()=>{
        music.currentTime = seek.value * music.duration/100;
    });

    let vol_icon = document.getElementById('vol_icon');
    let vol = document.getElementById('vol');
    let vol_bar = document.getElementsByClassName('vol_bar')[0];
    let vol_dot = document.getElementById('vol_dot');

    vol.addEventListener('change', () => {
        if(vol.value == 0){
            vol_icon.classList.remove('ri-volume-down-fill');
            vol_icon.classList.remove('ri-volume-up-fill');
            vol_icon.classList.add('ri-volume-mute-fill');
        }
        if(vol.value > 0){
            vol_icon.classList.remove('ri-volume-up-fill');
            vol_icon.classList.add('ri-volume-down-fill');
            vol_icon.classList.remove('ri-volume-mute-fill');
        }
        if(vol.value > 50){
            vol_icon.classList.add('ri-volume-up-fill');
            vol_icon.classList.remove('ri-volume-down-fill');
            vol_icon.classList.remove('ri-volume-mute-fill');
        }

        let vol_a = vol.value ;
        vol_bar.style.width = `${vol_a}%`;
        vol_dot.style.left = `${vol_a}%`;
        music.volume = vol_a / 100;
    })

    // ------------------ Music Selection ----------------

    Array.from(document.getElementsByClassName('playMusic')).forEach((e)=>{
        e.addEventListener('click',(el)=>{
            let index = el.target.id;
            // console.log(index)
            music.src = `${index}.mp3`;
            music.play();
        })
    })