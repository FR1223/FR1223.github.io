
let gameStage = 0;

const prelude = [
  "【系统】：检测到宿主精神连接成功，正在唤醒记忆……",
  "【系统】：欢迎回来，编号X-1999快穿执行者‘丘聿’。",
  "【系统】：检测到宿主本轮心愿为‘找到值得托付的人’，匹配世界中……",
  "【系统】：匹配成功，第一世界载入中。祝好运，别被NPC气哭。"
];

const firstWorld = [
  {
    text: "你睁开眼，天花板是陌生的欧式吊灯——新世界已经开始。",
    choices: ["查看周围", "躺着继续装死"]
  },
  {
    text: "【系统】：别装了，再不起来你妈就要端热水来了。",
    choices: ["翻身坐起", "继续装（然后真的被泼）"]
  }
];

function startGame() {
  document.getElementById('cover').style.display = 'none';
  document.getElementById('game-container').style.display = 'block';
  nextPrelude();
}

function nextPrelude() {
  if (gameStage < prelude.length) {
    document.getElementById('dialogue').innerText = prelude[gameStage];
    document.getElementById('choices').innerHTML = '<button onclick="nextPrelude()">继续</button>';
    gameStage++;
  } else {
    loadScene(0);
  }
}

function loadScene(index) {
  const scene = firstWorld[index];
  document.getElementById('dialogue').innerText = scene.text;
  const choiceDiv = document.getElementById('choices');
  choiceDiv.innerHTML = '';
  scene.choices.forEach((text, i) => {
    const btn = document.createElement('button');
    btn.innerText = `${i + 1}. ${text}`;
    btn.onclick = () => loadScene((index + 1) % firstWorld.length); // 简单循环展示用
    choiceDiv.appendChild(btn);
  });
}
