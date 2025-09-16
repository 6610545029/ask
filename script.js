const questions = [
  {
    question: "ถ้าต้องเจอเพื่อนใหม่ คุณจะเป็นคนประเภทไหน",
    answers: ["เป็นฝ่ายที่เริ่มทักทาย ปรับตัวง่าย เข้ากับคนเก่ง", "รออีกฝ่ายถามชื่อคุณก่อน ไม่อยากรีบร้อน เค้าถามมาค่อยตอบ", "ไม่สนทนาด้วย", "ให้เพื่อนมาช่วยคุย รู้สึกมั่นใจมากขึ้น"]
  },
  {
    question: "คุณมักจะทำอะไรในวันหยุด หลังจากต้องทำงานมาทั้งสัปดาห์",
    answers: ["นอนพักผ่อน", "เล่นเกมอยู่ที่บ้าน", "ออกไปเที่ยวกับเพื่อน", "อ่านหนังสือ"]
  },
  {
    question: "คุณมักจะเป็นผู้นำหรือผู้ตาม",
    answers: ["ผู้นำ", "ผู้ตาม"]
  },
  {
    question: "ถ้าเพื่อนสนิทคุณมีเรื่องเศร้าและเสียใจมากๆ คุณมักจะทำอย่างใจ",
    answers: ["พาเพื่อนไปหาของอร่อยๆกิน", "คอยรับฟังและให้คำปรึกษา", "ชวนเพื่อนไปกินเหล้าให้ลืมเรื่องเครียด", "ปล่อยให้เพื่อนใช้เวลาอยู่กับตัวเองไปก่อน"]
  },
  {
    question: "อีก 2 วันข้างหน้าคุณจะต้องไปเที่ยวที่ที่หนึ่ง คุณจะทำอะไรเป็นอย่างแรก",
    answers: ["เก็บเสื้อผ้าก่อน ยกไปทั้งตู้ได้ยกไปแล้ว เหลือดีกว่าขาด", "วางแผนการเดินทาง ที่ไหนเด่นที่ไหนดังต้องไปให้ครบ", "แล้วแต่เพื่อนเลยไปไหนไปกัน ขอนอนรอ", "เชฟประจำกลุ่ม เพื่อนเราต้องไม่หิว"]
  },
  {
    question: "จากคำถามที่แล้วถ้าเลือกได้ว่าอยากไปเที่ยวไหน จะเลือกที่ใด",
    answers: ["หอศิลป์-กรุงเทพ", "เขื่อนขุนด่านปราการชล-นครนายก", "แม่กำปอง-เชียงใหม่", "บางแสน-ชลบุรี"]
  },
  {
    question: "ถ้าคนที่คุณต้องไปเที่ยวด้วยเกิดดูแผนที่ผิด จะทำอย่างไร",
    answers: ["ไม่ไว้ใจแล้ว เดี๋ยวดูเอง", "ให้โอกาสดูใหม่ คนเราผิดพลาดได้", "ไม่พอใจ ไม่อยากไปด้วยแล้วเลี้ยวรถกลับ", "จอรถไว้ตรงนั้นแล้วเรียกรถ"]
  },
  {
    question: "คิดว่าตัวเองเป็นคนอารมณ์ร้อนมั้ย",
    answers: ["มาก อะไรนิดอะไรหน่อยหัวร้อนหมด", "มีบ้าง ก็บางเรื่องมันชวนให้หงุดหงิด", "สบายๆ โกรธง่ายหายไว", "ไม่เคยโกรธใครเลย ส่วนมากจะโดนโกรธ"]
  },
  {
    question: "สถานะความรักตอนนี้เป็นอย่างไร",
    answers: ["มีแฟนแล้ว", "ยังโสด", "มีแต่คนคุย"]
  },
  {
    question: "ถ้ามีแฟนแล้วรักแฟนมากมั้ยคะ",
    answers: ["มากกกกกกกกก", "เฉยๆ", "ยังไม่มีแฟน"]
  }
];

let currentQuestion = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const greetingElement = document.getElementById("greeting");


const userName = localStorage.getItem("quizName") || "คุณ";

function showQuestion() {
  let q = questions[currentQuestion];
  questionElement.textContent = q.question;
  answersElement.innerHTML = "";
  q.answers.forEach(ans => {
  let btn = document.createElement("button");
  btn.textContent = ans;
  btn.onclick = () => {
    // ลบ class selected จากปุ่มทั้งหมดก่อน
    Array.from(answersElement.children).forEach(b => b.classList.remove("selected"));
    // ใส่ class selected ให้ปุ่มที่กด
    btn.classList.add("selected");
    nextBtn.disabled = false;
  };
  answersElement.appendChild(btn);
});
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    window.location.href = "loading.html"; // ไปหน้ากำลังวิเคราะห์ก่อน
  }
};


showQuestion();
