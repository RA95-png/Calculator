console.log("a");
///////////////تحديد القيمة الافتراضية للقيمة, المعامل الاول, المعامل الثاني والعملية الحسابية//////////////
const calculat= {
    display_Value: '0',
    first_Operand: null,
    Second_Operand: false,
    operator: null,
  };

  ////////في حال انهاء العملية الحسابية, سيتم تحديث الالة الحاسبة وارجاعها للقيمة الافتراضية////////
  function updateCalculator() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
  }
  
  updateCalculator();

///////////تفعيل أزرار الالة الحاسبة, اذا تم النقر على أي زر سيم ارجاع قيمة هذا الزر/////////////////
const keys = document.querySelector('.keys');
keys.addEventListener('click', (event) => {
    const target = event.target;
    //////////////اذا تم النقر على اي شيء غير الازرار سيم الخروج من الدالة///////////////
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator1')) {
    console.log('operator', target.value);
    return;
  }

  if (target.classList.contains('operator2')) {
    console.log('operator', target.value);
    return;
  }


  if (target.classList.contains('decimal')) {
    console.log('decimal', target.value);
    return;
  }

  if (target.classList.contains('all-clear')) {
    console.log('clear', target.value);
    return;
  }

  console.log('digit', target.value);
});