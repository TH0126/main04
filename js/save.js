//会話実行処理
inbtn.addEventListener("click", function () {

    let time_val = "";
    let txt_val = "";

    //会話を追加するページを選択
    const div_scr = document.getElementById(user_scr[user_chg]);

    //scroll-innerにdiv(id=fukiadd)を作成
    const div_element = document.createElement("div");
    div_element.setAttribute("id", "fukiadd");
    div_scr.appendChild(div_element);

    //scroll-inner>fukiaddにdiv(id=text2)を作成
    const div_add = document.getElementById("fukiadd");
    const div2_element = document.createElement("div");
    div2_element.setAttribute("id", "text2");
    div_add.appendChild(div2_element);

    //scroll-inner>fukiadd>text2にPを作成
    const div_txt = document.getElementById("text2");
    const p_element = document.createElement("p");
    p_element.setAttribute("class", "time");
    const now = new Date();
    const Hour = now.getHours();
    const Min = "0" + now.getMinutes();
    time_val = Hour + ":" + Min.slice(-2);
    p_element.textContent = time_val;
    div_txt.appendChild(p_element);

    const divt_element = document.createElement("div");
    divt_element.setAttribute("id", "mei2_txt");
    div_txt.appendChild(divt_element);

    const div_mei = document.getElementById("mei2_txt");

    txt_val = t_area.value;
    let txt_Array = txt_val.split("\n");

    for (let i = 0; i < txt_Array.length; i++) {
        const new_element = document.createElement("p");

        //改行コード追加
        if (i < txt_Array.length - 1) {
            new_element.textContent = txt_Array[i] + "\n";
        } else if (i === txt_Array.length - 1) {
            new_element.textContent = txt_Array[i];
        }
        div_mei.appendChild(new_element)
    }

    //通常のid、classに変換する
    //id=text2を、class=textに変更する
    div_txt.classList.add("text");
    div_txt.removeAttribute("id");

    //id=fukiaddを、class=fukidasi2に変更する
    div_add.classList.add("fukidashi2");
    div_add.removeAttribute("id");

    //最新履歴の更新処理   
    //１つ前の最新のidを削除
    const div_old = document.getElementById("new" + user_chg);
    div_old.removeAttribute("id")

    //今回増えたコメントに最新のidを付与
    div_mei.classList.add("mei_txt");
    div_mei.id = "new" + user_chg;

    //最新履歴をuser側に出力
    const new_ko = document.getElementById("new" + user_chg);
    const user_ko = document.getElementById(user_co[user_chg]);

    //user側の前回履歴を削除
    while (user_ko.firstChild) {
        user_ko.removeChild(user_ko.firstChild);
    }

    const new_reki = new_ko.textContent;
    let new_reki_re = new_reki.replace(/( )+/g, "");
    const reki_Array = new_reki_re.split("\n");

    for (let i = 0; i < reki_Array.length; i++) {
        const new_element = document.createElement("p");
        new_element.textContent = reki_Array[i];
        user_ko.appendChild(new_element)
    }

    div_scr.scrollIntoView(false);

    t_area.value = "";
    t_area.style.height = "40px";

    //localStorageに登録
    //今回のデータをセット
    const data = {
        user: user_chg,
        time: time_val,
        text: txt_val,
    };

    //現在のlocalstorageの情報を取得
    const l_cnt = "0" + (localStorage.length + 1);

    //新しいkeyを作成
    const k_str = "kome" + l_cnt.slice(-2);

    const jsonData = JSON.stringify(data);
    localStorage.setItem(k_str, jsonData);


});
