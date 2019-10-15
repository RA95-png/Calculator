console.log("a");
///////////////تحديد القيمة الافتراضية للرقم, المعامل الاول, المعامل الثاني والعملية الحسابية//////////////
const calculat= {
    display_Value: '0',
    first_Operand: null,
    Second_Operand: false,
    operator: null,
  };

  ////////في حال انهاء العملية الحسابية, سيتم تحديث الآلة الحاسبة وإرجاعها للقيمة الافتراضية////////
  function updateCalculator() {
    const display = document.querySelector('.numbers');
    display.value = calculat.display_Value;
  }
  
  updateCalculator();

///////////تفعيل أزرار الالة الحاسبة, اذا تم النقر على أي زر سيتم إرجاع قيمة هذا الزر/////////////////
const keys = document.querySelector('.keys');
keys.addEventListener('click', (event) => {
    const target = event.target;
    //////////////اذا تم النقر على أي شيء غير الازرار سيتم الخروج من الدالة///////////////
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator1')) {
    console.log('operator1', target.value);
    return;
  }

  if (target.classList.contains('operator2')) {
    console.log('operator2', target.value);
    return;
  }


  if (target.classList.contains('dot')) {
    console.log('dot', target.value);
    return;
  }

  if (target.classList.contains('AC')) {
    console.log('clear', target.value);
    return;
  }

  console.log('digit', target.value);
});
