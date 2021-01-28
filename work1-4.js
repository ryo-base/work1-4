"use strict"

//定義
const task = [{ job: '机を片づける', genre: '掃除' }, { job: '牛乳を買う', genre: '買い物' }, { job: '散歩する', genre: '運動' }];
const bar = '========================'
const mention = '現在持っているタスクの一覧'

const addTask = () => {
    console.log(bar);
    console.log(mention);
    console.log(bar);

    task.forEach((t, i) => {
        console.log(`${i}  : [内容]　 ${t.job} 、[ジャンル]${t.genre}`);
    });


}



//初めから出てるもの
console.log(bar);
console.log(mention);
console.log(bar);

task.forEach((t, i) => {
    console.log(`${i}  : [内容]　 ${t.job} 、[ジャンル]${t.genre}`);
});

//追加
let inputTask = prompt('タスクを入力してください');

if (inputTask === null) {
    alert('キャンセルされました');
} else if (inputTask === '') {
    alert('入力されていません');
    location.reload();
} else {

    //追加ジャンル
    let inputGenre = prompt('ジャンルを入力してください');

    if (inputGenre === null) {
        alert('キャンセルされました');
    } else if (inputGenre === '') {
        alert('入力されていません');
        location.reload();
    } else {
        task.push({ job: inputTask, genre: inputGenre });
        addTask();
        alert('新しいタスクを追加しました');
    }
}


