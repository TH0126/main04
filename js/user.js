//グループを選択した場合
grpbtn.addEventListener("click", function () {
    user_chg = 0;

    //グループとの会話ページを表示
    for (let i = 0; i < user_scr.length; i++) {
        const div_gamen = document.getElementById(user_scr[i]);

        if (i === user_chg) {
            div_gamen.style.display = "block";
            div_gamen.style.zIndex = "10";
            div_gamen.scrollIntoView(false);
        } else {
            div_gamen.style.display = "none";
            div_gamen.style.zIndex = "0";
        }
    }
});

//名作くんを選択した場合
meisakubtn.addEventListener("click", function () {
    user_chg = 1;

    //名作くんとの会話ページを表示
    for (let i = 0; i < user_scr.length; i++) {
        const div_gamen = document.getElementById(user_scr[i]);

        if (i === user_chg) {
            div_gamen.style.display = "block";
            div_gamen.style.zIndex = "10";
            div_gamen.scrollIntoView(false);
        } else {
            div_gamen.style.display = "none";
            div_gamen.style.zIndex = "0";
        }
    }
});

//スィーツを選択した場合
sweetsbtn.addEventListener("click", function () {
    user_chg = 2;

    //スィーツとの会話ページを表示
    for (let i = 0; i < user_scr.length; i++) {
        const div_gamen = document.getElementById(user_scr[i]);

        if (i === user_chg) {
            div_gamen.style.display = "block";
            div_gamen.style.zIndex = "10";
            div_gamen.scrollIntoView(false);
        } else {
            div_gamen.style.display = "none";
            div_gamen.style.zIndex = "0";
        }
    }
});

//ボルトを選択した場合
borutobtn.addEventListener("click", function () {
    user_chg = 3;

    //ボルトとの会話ページを表示
    for (let i = 0; i < user_scr.length; i++) {
        const div_gamen = document.getElementById(user_scr[i]);

        if (i === user_chg) {
            div_gamen.style.display = "block";
            div_gamen.style.zIndex = "10";
            div_gamen.scrollIntoView(false);
        } else {
            div_gamen.style.display = "none";
            div_gamen.style.zIndex = "0";
        }
    }
});

//むすびを選択した場合
musubibtn.addEventListener("click", function () {
    user_chg = 4;

    //むすびとの会話ページを表示
    for (let i = 0; i < user_scr.length; i++) {
        const div_gamen = document.getElementById(user_scr[i]);

        if (i === user_chg) {
            div_gamen.style.display = "block";
            div_gamen.style.zIndex = "10";
            div_gamen.scrollIntoView(false);
        } else {
            div_gamen.style.display = "none";
            div_gamen.style.zIndex = "0";
        }
    }
});

//ノキオを選択した場合
nokiobtn.addEventListener("click", function () {
    user_chg = 5;

    //ノキオの会話ページを表示
    for (let i = 0; i < user_scr.length; i++) {
        const div_gamen = document.getElementById(user_scr[i]);

        if (i === user_chg) {
            div_gamen.style.display = "block";
            div_gamen.style.zIndex = "10";
            div_gamen.scrollIntoView(false);
        } else {
            div_gamen.style.display = "none";
            div_gamen.style.zIndex = "0";
        }
    }
});
