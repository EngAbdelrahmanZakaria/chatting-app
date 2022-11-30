/* random color */
let randomm      =       ["#7F39FB", "#f36bab", "#428FEB", "#2DB652", "#E44E55"];
/*let randomm      =       [0,1,2,3,4,5,6,7,8,9,"d", "c", "b", "a", "e", "f"];
for( i=0; i<6; i++ ) {

}*/
xx = randomm[Math.floor( Math.random() * randomm.length )];

                    console.log(xx);/* random color */
/* add active  */
let x           = document.querySelectorAll('.friend-unit');
let img         = document.querySelectorAll('.rec-img');
let text        = document.querySelectorAll('.chat-m .friend-text h4');
let active      = document.querySelectorAll('.chat-m .friend-text span');
let chatbg      = document.querySelectorAll('.chat-m .friend-text span');
let forrandom   = document.querySelectorAll('.chat-part');
x.forEach(
    function(ele) {
        ele.onclick = function() {
            x.forEach(
                function(ele) {
                    ele.classList.remove('friend-unit-active');
                }
            );
            this.classList.add('friend-unit-active');
            
            forrandom.forEach(
                function(ele) {
                    xx = randomm[Math.floor( Math.random() * randomm.length )];
                    ele.style.setProperty(
                        '--random', xx
                    );
                    console.log(xx);
                }
            );
            
            let sourse      = this.children[2].src;
            let nameonine   = this.children[3].children[0];
            let timeonine   = this.children[3].children[1];
            img.forEach(
                function(ele) {
                    ele.src = sourse;
                }
            );
            text.forEach(
                function(ele) {
                    ele.innerHTML = nameonine.innerHTML;
                }
            );
            active.forEach(
                function(ele) {
                    ele.innerHTML = timeonine.innerHTML;
                }
            );
        };
    }
);
/* add active  */

/* chat */
let input_box   =   document.getElementById('searchh');

function chat() {
    let input       =   document.getElementById('searchh').value;
    let inputbtn    =   document.querySelectorAll('.send');
    let msm_chat    =   document.querySelector('.msm-chat');
    let messagee    =   `  <div class="my-message">
                                ${input}
                            </div>
                            <img src="img/my.jpg">`

    let messbox     =   document.createElement("div");
    if (input.trim() != "") {
        messbox.classList.add('sender');
        messbox.classList.add('smmothshow');
        messbox.innerHTML += messagee;
        msm_chat.appendChild(messbox);
        setTimeout(() => {
            messbox.classList.remove('smmothshow');
        }, 100 );
        msm_chat.scrollTop = msm_chat.scrollHeight;
    }

    function robot() {
        let rand_msm_rec    =   randomMessages = [
                            "Where's Messi?",
                            `like my <a href="https://www.facebook.com/Eng.Abdelrahman.Zakaria" target="_blank">facebook page</a>`,
                            `follow me on <a href="https://www.behance.net/Abdelrahman_Zakaria" target="_blank">behance</a>`,
                            "I will give you 10 millions",
                            "Thanks",
                            "let's go!",
                            "Amazing",
                            "I'll buy you a coffee",
                            "Give me Your data plz 👉👈",
                            "How you doin'?",
                            "I know a guy who can do that",
                            "sorry I can't",
                            "wanna hear a joke?",
                            "No, I don't think I will",
                            "That's what she said",
                            "مرة حلة شاطت جابت جون",
                            "Funny message<br>You are banned for 30 days",
                            "You've been hacked give me $999",
                            "Made with love",
                            "If I made you laugh consider leaving a like",
                            'A wise man once said" Fake it till you make it"',
                            "No",
                            "I'll add more messages later",
                        ];
        let oldmsm      = "";
        let msm_num     =   Math.floor(Math.random()*rand_msm_rec.length);
        if (oldmsm == msm_num) {
            msm_num += 1;
        }
        let msm_cont    =   rand_msm_rec[msm_num];
        let msm_chat    =   document.querySelector('.msm-chat');
        let messagee    =   `<img src="img/mark.jpg" class="rec-img">
                                <div class="your-message">
                                    ${msm_cont}
                                </div>`

        let messbox     =   document.createElement("div");
        messbox.classList.add('reciever');
        messbox.classList.add('smmothshow');
        messbox.innerHTML += messagee;
        msm_chat.appendChild(messbox);
        setTimeout(() => {
            messbox.classList.remove('smmothshow');
        }, 1000 );
        msm_chat.scrollTop = msm_chat.scrollHeight;

    }
    robot();

}
function chat_adelet() {
    chat();
    input_box.value="";
}

input_box.onkeydown = function () {
    if (window.event.keyCode == "13") {
      chat();
      input_box.value="";
    }
  };

    

    if ( chat() ) {
        robot();
    }
/* chat */



