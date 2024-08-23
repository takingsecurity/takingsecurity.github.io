const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');
const submitBtn = document.getElementById('submitBtn');
function validateInputs() {
    if (box1.value === 'takingsecurityefns$89' && box2.value === 'taking3qrit') {
        submitBtn.classList.add('enabled');
        submitBtn.href = 'https://taking3qrit.github.io';
    } else {
        submitBtn.classList.remove('enabled');
        submitBtn.href = '#';
        }
        }
box1.addEventListener('input', validateInputs);
box2.addEventListener('input', validateInputs);