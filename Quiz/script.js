const questions =[
    {
        question: "JavaScriptはどの種類の言語ですか？",
        choices: ["マークアップ言語", "スクリプト言語", "スタイルシート言語", "データベース言語"],
        correctAnswer: 1
    },
    {
        question: "document.getElementById()は何をする関数ですか？",
        choices: ["HTML要素を作成する", "HTML要素を削除する", "指定されたIDを持つHTML要素を取得する", "CSSスタイルを変更する"],
        correctAnswer: 2
    },
    {
        question: "JavaScriptで変数を宣言する方法として正しくないものはどれですか？",
        choices: ["var x = 10;", "let x = 10;", "const x = 10;", "variable x = 10;"],
        correctAnswer: 3
    },
    {
        question: "次のうち、JavaScriptのデータ型でないものはどれですか？",
        choices: ["number", "string", "boolean", "float"],
        correctAnswer: 3
    },
    {
        question: "JavaScriptで配列の長さを取得するにはどうすればよいですか？",
        choices: ["array.length()", "array.size()", "array.length", "length(array)"],
        correctAnswer: 2
    },
    {
        question: "JavaScriptで条件分岐を行うための構文は何ですか？",
        choices: ["loop", "if", "switch", "for"],
        correctAnswer: 1
    },
    {
        question: "JavaScriptで繰り返し処理を行うための構文は何ですか？",
        choices: ["if", "for", "try", "catch"],
        correctAnswer: 1
    },
    {
        question: "JavaScriptで関数を定義するにはどうすればよいですか？",
        choices: ["function = myFunction() {}", "function myFunction() {}", "myFunction = function() {}", "def myFunction() {}"],
        correctAnswer: 1
    },
    {
        question: "JavaScriptでHTML要素のテキストを変更するにはどうすればよいですか？",
        choices: ["element.text = '新しいテキスト';", "element.value = '新しいテキスト';", "element.textContent = '新しいテキスト';", "element.innerText = '新しいテキスト';"],
        correctAnswer: 2
    },
    {
        question: "JavaScriptでイベントリスナーを追加するにはどうすればよいですか？",
        choices: ["element.addEventListener()", "element.onEvent()", "element.attachEvent()", "element.listenEvent()"],
        correctAnswer: 0
    },
    {
        question: "JavaScriptで指定した時間後に処理を実行するにはどうすればよいですか？",
        choices: ["setTimeout(関数, ミリ秒);", "setInterval(関数, ミリ秒);", "delay(関数, ミリ秒);", "sleep(ミリ秒);"],
        correctAnswer: 0
    },
    {
        question: "JavaScriptでコンソールにメッセージを出力するにはどうすればよいですか？",
        choices: ["print('メッセージ');", "console.log('メッセージ');", "log('メッセージ');", "display('メッセージ');"],
        correctAnswer: 1
    }
    //他の問題を追加
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score-value");
const startButton = document.getElementById("start-button");

function startQuiz() {
    startButton.style.display = "none";
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score;
    showQuestion();
  }
  
  function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
  
    choicesElement.innerHTML = ""; // 選択肢をクリア
  
    question.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.classList.add("choice-btn");
      button.dataset.index = index; // どの選択肢か判別するための情報を付加
      button.addEventListener("click", checkAnswer);
      choicesElement.appendChild(button);
    });
  }
  
  function checkAnswer(event) {
    const selectedAnswerIndex = parseInt(event.target.dataset.index);
    const correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;
  
    if (selectedAnswerIndex === correctAnswerIndex) {
      resultElement.textContent = "正解！";
      score++;
      scoreElement.textContent = score;
    } else {
      resultElement.textContent = "不正解...";
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      setTimeout(showQuestion, 1000); // 1秒後に次の問題へ
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    questionElement.textContent = "クイズ終了！";
    choicesElement.innerHTML = "";
    resultElement.textContent = `最終スコア: ${score} / ${questions.length}`;
    startButton.style.display = "block";
    startButton.textContent = "もう一度プレイ";
  }
  
  startButton.addEventListener("click", startQuiz);
