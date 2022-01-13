//最新の会話が初期表示されるようにする。
const scl0_down = document.getElementById("scroll-inner");
scl0_down.scrollIntoView(false);

// window.addEventListener('DOMContentLoaded', function (e) {
//     location.hash = "posi";
// });

//入力エリアで改行するとテキストエリアの高さが広がるようにする。
t_area.addEventListener("input", () => {
    t_area.style.height = clientHeight + "px";

    let scrollHeight = t_area.scrollHeight;

    t_area.style.height = scrollHeight + "px";
});

        // //最新履歴表示
        // const new_ko = document.getElementById("new" + user_chg);
        // const meisaku = document.getElementById("meisaku");

        // const new_reki = new_ko.textContent;
        // let new_reki_re = new_reki.replace(/( )+/g, "");
        // mew_reki_re = new_reki_re.replace(/^\n+/, "");
        // mew_reki_re = new_reki_re.replace(/\n+$/, "");
        // const reki_Array = new_reki_re.split("\n");

        // for (let i = 0; i < reki_Array.length; i++) {
        //     const new_element = document.createElement("p");
        //     new_element.textContent = reki_Array[i];
        //     meisaku.appendChild(new_element)
        // }
