//過去会話取り込み処理
if (localStorage.length > 0) {
    for (let i = 1; i <= localStorage.length; i++) {
        let l_cnt = "0" + i;
        l_cnt = l_cnt.slice(-2);
        let k_str = "kome" + l_cnt;

        if (localStorage.getItem(k_str)) {
            const jsonData = localStorage.getItem(k_str);
            const data = JSON.parse(jsonData);

            //会話を追加するページを選択
            const div_scr = document.getElementById(user_scr[data.user]);

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
            p_element.textContent = data.time;
            div_txt.appendChild(p_element);

            const divt_element = document.createElement("div");
            divt_element.setAttribute("id", "mei2_txt");
            div_txt.appendChild(divt_element);

            const div_mei = document.getElementById("mei2_txt");

            let txt_val = data.text;
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
            const div_old = document.getElementById("new" + data.user);
            div_old.removeAttribute("id")

            //今回増えたコメントに最新のidを付与
            div_mei.classList.add("mei_txt");
            div_mei.id = "new" + data.user;

            //最新履歴をuser側に出力
            const new_ko = document.getElementById("new" + data.user);
            const user_ko = document.getElementById(user_co[data.user]);

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
        }
    }
}
