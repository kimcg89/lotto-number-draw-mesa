// 요소 선택 및 상수 선언
const numbersDiv = document.querySelector('.numbers')
const drawButton = document.querySelector('#draw')
const resetButton = document.querySelector('#reset')
const lottoNumbers = []
const colors = ['orange', 'skyblue', 'red', 'purple', 'green']

// paintNumber 함수
function paintNumber(number){
  const eachNumDiv = document.createElement('div')
  eachNumDiv.classList.add('eachnum')
  let colorIndex = Math.floor(number / 10)
  eachNumDiv.style.backgroundColor = colors[colorIndex]
  eachNumDiv.textContent = number
  numbersDiv.appendChild(eachNumDiv)
}

// 추첨 버튼 클릭 이벤트 핸들링
drawButton.addEventListener('click', function(){
  while(lottoNumbers.length < 6){
    let ran = Math.floor(Math.random() * 45) + 1
    if(lottoNumbers.indexOf(ran) === -1){
      lottoNumbers.push(ran)
      paintNumber(ran)
    }
  }
})


// drawButton.addEventListener('click', function(){
//   let numSamples = 10000;
//   let sampleMeans = [];
//   //중심극한정리 적용
//   for (let i = 0; i < numSamples; i++) {
//     let lottoNumbers = [];
//     while (lottoNumbers.length < 6) {
//         let ran = Math.floor(Math.random() * 45) + 1;
//         if (lottoNumbers.indexOf(ran) === -1) {
//             lottoNumbers.push(ran);
//         }
//     }
//     let sampleMean = lottoNumbers.reduce((acc, cur) => acc + cur, 0) / lottoNumbers.length;
//     sampleMeans.push(sampleMean);
// }
// })

// 다시 버튼 클릭 이벤트 핸들링
resetButton.addEventListener('click', function(){
  lottoNumbers.splice(0, 6)
  numbersDiv.innerHTML = ""
})