//функция определения поддержки WebP
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});


//sliders
$('.slider__inner').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  fade: true,
  cssEase: 'linear',
  prevArrow: '<button type="button" class="slick-btn slick-prev"> <span></span></button>',
  nextArrow: '<button type="button" class="slick-btn slick-next"> <span></span></button>',
});
$('.dishes-slider__slider').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 900,
  slidesToShow: 4,
  arrows: false,
  responsive: [{
      breakpoint: 1081,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 819,
      settings: {
        slidesToShow: 1.7
      }
    },
    {
      breakpoint: 471,
      settings: {
        slidesToShow: 1
      }
    },
  ]
});

$(document).ready(function () {
  $('.questions-item').click(function () {
    $(this).toggleClass('questions-item--active');
    $(this).children('div.questions-item__answer').toggle('normal');
    return false;
  });
});

//dropdowns
document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden')

  dropDownBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    dropDownList.classList.toggle('dropdown__list--visible');
    this.classList.toggle('dropdown__button--active');
  });

  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.children[0].innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list--visible');
      dropDownBtn.classList.remove('dropdown__button--active');
    });
  });

  document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {
      dropDownList.classList.remove('dropdown__list--visible');
      dropDownBtn.classList.remove('dropdown__button--active');
    };
  });
 
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropDownList.classList.remove('dropdown__list--visible');
      dropDownBtn.classList.remove('dropdown__button--active');
    };
  });
});

//tabs
const tabs = document.querySelectorAll('.tabs');
if (tabs) {
  document.querySelectorAll('.tabs').forEach(function (tabWrapper) {
    const programsBtn = tabWrapper.querySelector('.all-programs');
    const specialsBtn = tabWrapper.querySelector('.special-programs');
    const programs = tabWrapper.querySelector('.tabs__programs');
    const specialPrograms = tabWrapper.querySelector('.tabs__special');
    const ccalBtns = programs.querySelectorAll('.programs-list__item-input');
    const ccalTabs = programs.querySelectorAll('.programs-tab');
    const ccalBtnsSpecial = specialPrograms.querySelectorAll('.programs-list__item-input');
    const ccalTabsSpecial = specialPrograms.querySelectorAll('.programs-tab');

    programsBtn.addEventListener("click", function () {
      if (!programsBtn.classList.contains("tabs__programs-label--active")) {
        programsBtn.classList.add("tabs__programs-label--active");
        specialsBtn.classList.remove("tabs__programs-label--active");
        specialPrograms.classList.remove('programs--active');
        programs.classList.add('programs--active');
      }
    });

    specialsBtn.addEventListener("click", function () {
      if (!specialsBtn.classList.contains("tabs__programs-label--active")) {
        specialsBtn.classList.add("tabs__programs-label--active");
        programsBtn.classList.remove("tabs__programs-label--active");
        programs.classList.remove('programs--active');
        specialPrograms.classList.add('programs--active');
      }
    });

    ccalBtns.forEach(function (ccalBtn) {
      ccalBtn.addEventListener('change', function () {
        let tabName = ccalBtn.getAttribute('data-name');
        ccalTabs.forEach(function (ccalTab) {
          if (ccalTab.classList.contains(tabName)) {
            ccalTab.classList.add('programs-tab--active');
          } else {
            ccalTab.classList.remove('programs-tab--active');
          }
        });
      });
    });

    ccalBtnsSpecial.forEach(function (ccalBtnSpecial) {
      ccalBtnSpecial.addEventListener('change', function () {
        let tabName = ccalBtnSpecial.getAttribute('data-name');
        ccalTabsSpecial.forEach(function (ccalTabSpecial) {
          if (ccalTabSpecial.classList.contains(tabName)) {
            ccalTabSpecial.classList.add('programs-tab--active');
          } else {
            ccalTabSpecial.classList.remove('programs-tab--active');
          }
        });
      });
    });


    ccalTabs.forEach(function (ccalTab) {
      const daysBtns = ccalTab.querySelectorAll('.days-tabs__input');
      const daysTabs = ccalTab.querySelectorAll('.days-tabs__menu-list');
      daysBtns.forEach(function (daysBtn) {
        daysBtn.addEventListener('change', function () {
          let dayId = daysBtn.getAttribute('data-id');
          daysTabs.forEach(function (daysTab) {
            if (daysTab.getAttribute('data-id') === dayId) {
              daysTab.classList.add('menu-list--active');
            } else {
              daysTab.classList.remove('menu-list--active');
            }
          });
        });
      });
    });

    ccalTabsSpecial.forEach(function (ccalTabSpecial) {
      const daysBtnsSpecial = ccalTabSpecial.querySelectorAll('.days-tabs__input');
      const daysTabsSpecial = ccalTabSpecial.querySelectorAll('.days-tabs__menu-list');
      daysBtnsSpecial.forEach(function (daysBtnSpecial) {
        daysBtnSpecial.addEventListener('change', function () {
          let dayId = daysBtnSpecial.getAttribute('data-id');
          daysTabsSpecial.forEach(function (daysTabSpecial) {
            if (daysTabSpecial.getAttribute('data-id') === dayId) {
              daysTabSpecial.classList.add('menu-list--active');
            } else {
              daysTabSpecial.classList.remove('menu-list--active');
            }
          });
        });
      });
    });
  });
}


//contacts sidebar
const contactsSidebar = document.querySelector('.sidebar-contacts__main');
const contactsHidden = document.querySelector('.hidden-icons');
if (contactsSidebar) {
  contactsSidebar.addEventListener('click', function () {
    contactsSidebar.classList.toggle('sidebar-contacts__main--active');
    contactsHidden.classList.toggle('hidden-icons--active');
  });
};

//phone mask 
let elements = document.querySelectorAll('._phone');
if (elements) {
  for (let i = 0; i < elements.length; i++) {
    new IMask(elements[i], {
      mask: '+{7}(000)000-00-00',
    });
  };
};

//forms 

//form validation
function mailTest(input) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value);
};

function phoneTest(input) {
  return /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(input.value);
};

function numberTest(input) {
  return /^[1-9]\d*$/.test(input.value);
};

function formAddError(input) {
  input.parentNode.classList.add('_error');
};

function formRemoveError(input) {
  input.parentNode.classList.remove('_error');
};

function formAddCorrect(input) {
  input.parentNode.classList.add('_correct');
};

function formRemoveCorrect(input) {
  input.parentNode.classList.remove('_correct');
};


//online order
function createFormItem(itemsPlace, name, amount) {
  var item = document.createElement("div");
  item.className = 'online-form__total-item';
  itemName = document.createElement("span");
  itemName.className = 'online-form__item-name';
  itemName.innerText = name;
  item.prepend(itemName);
  itemAmountBlock = document.createElement("p");
  itemAmountBlock.className = 'online-form__amount-block';
  item.append(itemAmountBlock);
  itemSpan = document.createElement("span");
  itemSpan.innerText = "-";
  itemAmountBlock.append(itemSpan);
  itemAmount = document.createElement("span");
  itemAmount.className = 'online-form__amount';
  itemAmount.innerText = amount;
  itemAmountBlock.append(itemAmount);
  itemAmountSpan = document.createElement("span");
  itemAmountSpan.innerText = "шт";
  itemAmountBlock.append(itemAmountSpan);
  itemsPlace.append(item);
};

const onlineBtn = document.querySelector('.online-order');

if (onlineBtn) {
  const onlineForm = document.querySelector('.online-form');
  const onlineFormClose = document.querySelector('.online-form__close');
  const onlineFormAccept = document.querySelector('.online-accept');
  const onlineFormAlert = document.querySelector('.online-form__alert');
  const onlineFormSucceed = document.querySelector('.online-succeed');
  const onlineFormSucceedClose = onlineFormSucceed.querySelector('.form-succeed__close');
  const onlineFormInputs = onlineForm.querySelectorAll('.online-form__input-wrapper');
  const onlineFormRowInputs = onlineForm.querySelectorAll('.online-form__label');
  const onlineFormDropdowns = onlineForm.querySelectorAll('.dropdown__button');
  const onlineFormCheckboxes = onlineForm.querySelectorAll('.online-form__terms-input');
  const onlineFormAmount = onlineForm.querySelector('.online-form__amount');
  const onlineFormPrice = onlineForm.querySelector('.online-form__price');
  const onlineFormItems = onlineForm.querySelector('.online-form__total-items-inner');
  onlineBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (!onlineBtn.classList.contains('online-order--inactive')) {
      const orderWrapper = document.querySelector('.table-inner');
      const formAmounts = orderWrapper.querySelectorAll('.ordering-item__amount');
      const totalAmount = orderWrapper.querySelector('.ordering-form__amount');
      const totalPrice = orderWrapper.querySelector('.ordering-form__price');
      let totalAmountValue = totalAmount.getAttribute('data-amount');
      onlineFormAmount.setAttribute('data-amount', totalAmountValue);
      onlineFormAmount.innerText = totalAmountValue;
      let totalPriceValue = totalPrice.getAttribute('data-price');
      onlineFormPrice.setAttribute('data-amount', totalPriceValue);
      onlineFormPrice.innerText = totalPriceValue;
      formAmounts.forEach(function (formAmount) {
        let itemAmount = Number(formAmount.getAttribute('data-amount'));
        let itemName = formAmount.parentNode.parentNode.parentNode.children[1].innerText;
        if (itemAmount > 0) {
          createFormItem(onlineFormItems, itemName, itemAmount);
        }
      });

      document.body.style.overflow = 'hidden';
      onlineForm.classList.add('online-form--active');
      onlineFormClose.addEventListener('click', function () {
        if (onlineFormAccept.classList.contains('sweets-accept')) {
          onlineFormItems.innerHTML = '';
        };
        onlineForm.classList.remove('online-form--active');
        document.body.style.overflow = '';
        const formReq = onlineForm.querySelectorAll('._req');
        formReq.forEach(function (input) {
          formRemoveError(input);
          formRemoveCorrect(input);
          input.value = '';
          onlineFormDropdowns.forEach(function (onlineFormDropdown) {
            let dropdownDefault = onlineFormDropdown.getAttribute('data-default');
            onlineFormDropdown.children[0].innerText = dropdownDefault;
          });
        });
        const inputs = onlineForm.querySelectorAll('.online-form__input');
        inputs.forEach(function (input) {
          input.value = '';
        });
        onlineFormCheckboxes.forEach(function (onlineFormCheckbox) {
          onlineFormCheckbox.checked = false;
        });
      });
      onlineFormAccept.addEventListener('click', function () {
        let error = 0;
        let selectDishErr = 0;
        const formReq = onlineForm.querySelectorAll('._req');
        formReq.forEach(function (input) {
          switch (true){
            case (input.classList.contains('_phone')):
              if (phoneTest(input)) {
                formRemoveError(input);
                formAddCorrect(input);
              } else {
                formRemoveCorrect(input);
                formAddError(input);
                error++;
              };
              break;
            case (input.classList.contains('_mail')):
              if (mailTest(input)) {
                formRemoveError(input);
                formAddCorrect(input);
              } else {
                formRemoveCorrect(input);
                formAddError(input);
                error++;
              };
              break;
            case (input.classList.contains('_select-dish')):
              if (input.value === '') {
                selectDishErr++;
              };
              break;
            case (input.classList.contains('_terms')):
              if (input.checked) {
                formRemoveError(input);
                formAddCorrect(input);
              } else {
                formRemoveCorrect(input);
                formAddError(input);
                error++;
              };
              break;
            case (input.classList.contains('_num')):
              if (numberTest(input)) {
                formRemoveError(input);
                formAddCorrect(input);
              } else {
                formRemoveCorrect(input);
                formAddError(input);
                error++;
              };
              break;
            default:
              if (input.value === '') {
                formRemoveCorrect(input);
                formAddError(input);
                error++;
              } else {
                formRemoveError(input);
                formAddCorrect(input);
              };
              break;
          };
        });
        if (error === 0) {
          onlineFormAlert.classList.remove('online-form__alert--active');
          onlineForm.classList.remove('online-form--active');
          onlineFormSucceed.classList.add('form-succeed--active');
          const formReq = onlineForm.querySelectorAll('._req');
          formReq.forEach(function (input) {
            formRemoveError(input);
            formRemoveCorrect(input);
            input.value = '';
            onlineFormDropdowns.forEach(function (onlineFormDropdown) {
              let dropdownDefault = onlineFormDropdown.getAttribute('data-default');
              onlineFormDropdown.children[0].innerText = dropdownDefault;
            });
          });
          const inputs = onlineForm.querySelectorAll('.online-form__input');
          inputs.forEach(function (input) {
            input.value = '';
          });
          onlineFormCheckboxes.forEach(function (onlineFormCheckbox) {
            onlineFormCheckbox.checked = false;
          });
          if (onlineFormAccept.classList.contains('sweets-accept')) {
            onlineFormItems.innerHTML = '';
            document.querySelector('.ordering-form').classList.remove('ordering-form--active');


            const orderWrapper = document.querySelector('.table-inner');
            const orderAmounts = orderWrapper.querySelectorAll('.item-amount');
            const formAmounts = orderWrapper.querySelectorAll('.ordering-item__amount');
            const totalAmount = orderWrapper.querySelector('.ordering-form__amount');
            const totalPrice = orderWrapper.querySelector('.ordering-form__price');
            totalAmount.setAttribute('data-amount', 0);
            totalAmount.innerText = "0";
            onlineFormAmount.setAttribute('data-amount', 0);
            onlineFormAmount.innerText = "0";
            totalPrice.setAttribute('data-price', 0);
            totalPrice.innerText = "0";
            onlineFormPrice.setAttribute('data-amount', 0);
            onlineFormPrice.innerText = 0;
            formAmounts.forEach(function (formAmount) {
              formAmount.setAttribute('data-amount', 0);
              formAmount.innerText = "0";
              formAmount.parentNode.parentNode.querySelector('.ordering-item__price').setAttribute('data-cost', 0);
              formAmount.parentNode.parentNode.querySelector('.ordering-item__price').innerText = "0";
              formAmount.parentNode.parentNode.parentNode.classList.remove('ordering-item--active');
            });
            orderAmounts.forEach(function (orderAmount) {
              orderAmount.setAttribute('data-amount', '0');
              orderAmount.innerText = '0';
            });
          }
        } else {
          onlineFormAlert.classList.add('online-form__alert--active');
          if (selectDishErr > 1) {
            onlineForm.querySelectorAll('._select-dish').forEach(function (selectErr) {
              if (selectErr.value === '') {
                formAddError(selectErr);
              }
            });
          } else {
            onlineForm.querySelectorAll('._select-dish').forEach(function (selectErr) {
              formAddCorrect(selectErr);
            });
          };
        };
      });
    }
  });
  onlineFormSucceedClose.addEventListener('click', function (e) {
    e.preventDefault();
    onlineFormSucceed.classList.remove('form-succeed--active');
    document.body.style.overflow = '';
  });
  onlineFormInputs.forEach(function (onlineFormInput) {
    onlineFormInput.addEventListener('keydown', function () {
      onlineFormInput.classList.remove('_error');
      onlineFormInput.classList.remove('_correct');
    });
  });
  onlineFormRowInputs.forEach(function (onlineFormRowInput) {
    onlineFormRowInput.addEventListener('keydown', function () {
      onlineFormRowInput.classList.remove('_error');
      onlineFormRowInput.classList.remove('_correct');
    });
  });
  onlineFormDropdowns.forEach(function (onlineFormDropdown) {
    onlineFormDropdown.addEventListener('click', function () {
      onlineFormDropdown.parentNode.classList.remove('_error');
    });
  });
};
const onlineFormTerms = document.querySelectorAll('.online-form__terms-label');
if (onlineFormTerms) {
  onlineFormTerms.forEach(function (onlineFormTerm) {
    onlineFormTerm.addEventListener('click', function () {
      if (onlineFormTerm.classList.contains('_error')) {
        onlineFormTerm.classList.remove('_error');
      }
    });
  });
}

//phone order on main page
function mobileAddError(input) {
  input.parentNode.parentNode.classList.add('_error');
};

function mobileRemoveError(input) {
  input.parentNode.parentNode.classList.remove('_error');
};

function mobileAddCorrect(input) {
  input.parentNode.parentNode.classList.add('_correct');
};

function mobileRemoveCorrect(input) {
  input.parentNode.parentNode.classList.remove('_correct');
};



const mobileMainForm = document.querySelector('.form__mobile');
if (mobileMainForm) {
  const mobileMainAccept = mobileMainForm.querySelector('.main-phone-order');
  const mobileMainSucceed = document.querySelector('.mobile-succeed');
  const mobileMainSucceedClose = mobileMainSucceed.querySelector('.form-succeed__close');
  const mobileMainInputs = mobileMainForm.querySelectorAll('.form__input');
  const mobileMainTerms = mobileMainForm.querySelector('.form__terms-label');
  const mobileMainCheckboxes = mobileMainForm.querySelectorAll('.form__checkboxes-input');
  mobileMainAccept.addEventListener('click', function (e) {
    e.preventDefault();
    let error = 0;
    const formReq = mobileMainForm.querySelectorAll('._req');
    formReq.forEach(function (input) {
      switch (true) {
        case (input.classList.contains('_phone')):
          if (phoneTest(input)) {
            mobileRemoveError(input);
            mobileAddCorrect(input);
          } else {
            mobileRemoveCorrect(input);
            mobileAddError(input);
            error++;
          };
          break;
        case (input.classList.contains('_terms')):
          if (input.checked) {
            formRemoveError(input);
            formAddCorrect(input);
          } else {
            formRemoveCorrect(input);
            formAddError(input);
            error++;
          };
          break;
        default:
          if (input.value === '') {
            mobileRemoveCorrect(input);
            mobileAddError(input);
            error++;
          } else {
            mobileRemoveError(input);
            mobileAddCorrect(input);
          };
          break;
      };
    });
    if (error === 0) {
      mobileMainSucceed.classList.add('form-succeed--active');
      const inputs = mobileMainForm.querySelectorAll('.form__input');
      inputs.forEach(function (input) {
        mobileRemoveError(input);
        mobileRemoveCorrect(input);
        input.value = '';
      });
      mobileMainSucceedClose.addEventListener('click', function () {
        mobileMainSucceed.classList.remove('form-succeed--active');
        document.body.style.overflow = '';
      });
      mobileMainCheckboxes.forEach(function (mobileMainCheckbox) {
        mobileMainCheckbox.checked = false;
      });
      document.body.style.overflow = 'hidden';
    }
  });
  mobileMainInputs.forEach(function (mobileMainInput) {
    mobileMainInput.addEventListener('keydown', function () {
      mobileRemoveError(mobileMainInput);
      mobileRemoveCorrect(mobileMainInput);
    })
  });
  mobileMainTerms.addEventListener('click', function () {
    mobileMainTerms.classList.remove('_error');
  });
};



//phone order
function phoneOrder(phoneBtn, form) {
  const phoneClose = form.querySelector('.phone-form__close');
  const phoneAccept = form.querySelector('.phone-form__accept');
  const phoneInputs = form.querySelectorAll('.phone-form__input');
  const phoneTerms = form.querySelector('.phone-form__terms-label');
  const phoneFormSucceed = document.querySelector('.mobile-succeed');
  const phoneFormSucceedClose = phoneFormSucceed.querySelector('.form-succeed__close');
  phoneBtn.addEventListener('click', function () {
    form.classList.add('phone-form--active');
  });
  phoneClose.addEventListener('click', function () {
    form.classList.remove('phone-form--active');
    const formReq = form.querySelectorAll('._req');
    formReq.forEach(function (input) {
      mobileRemoveError(input);
      mobileRemoveCorrect(input);
      input.value = '';
    });
  });
  phoneAccept.addEventListener('click', function () {
    let error = 0;
    const formReq = form.querySelectorAll('._req');
    formReq.forEach(function (input) {
      switch (true) {
        case (input.classList.contains('_phone')):
          if (phoneTest(input)) {
            mobileRemoveError(input);
            mobileAddCorrect(input);
          } else {
            mobileRemoveCorrect(input)
            mobileAddError(input);
            error++;
          };
          break;
        case (input.classList.contains('_terms')):
          if (input.checked) {
            formRemoveError(input);
            formAddCorrect(input);
          } else {
            formRemoveCorrect(input);
            formAddError(input);
            error++;
          };
          break;
        default:
          if (input.value === '') {
            mobileRemoveCorrect(input);
            mobileAddError(input);
            error++;
          } else {
            mobileRemoveError(input);
            mobileAddCorrect(input);
          };
          break;
      };
    });
    if (error === 0) {
      const formReq = form.querySelectorAll('._req');
      formReq.forEach(function (input) {
        mobileRemoveError(input);
        mobileRemoveCorrect(input);
        input.value = '';
      });
      form.classList.remove('phone-form--active');
      form.parentNode.children[1].classList.remove('ordering-form--active');
      form.parentNode.children[0].classList.remove('ordering-form--active');
      form.nextElementSibling.classList.add('form-succeed--active');


      const phoneOrderWrapper = document.querySelector('.table-inner');
      const orderAmounts = phoneOrderWrapper.querySelectorAll('.sweet-amount__amount');
      const formAmounts = phoneOrderWrapper.querySelectorAll('.ordering-item__amount');
      const totalAmount = phoneOrderWrapper.querySelector('.ordering-form__amount');
      const totalPrice = phoneOrderWrapper.querySelector('.ordering-form__price');
      totalAmount.setAttribute('data-amount', 0);
      totalAmount.innerText = "0";
      totalPrice.setAttribute('data-price', 0);
      totalPrice.innerText = "0";
      formAmounts.forEach(function (formAmount) {
        formAmount.setAttribute('data-amount', 0);
        formAmount.innerText = "0";
        formAmount.parentNode.parentNode.querySelector('.ordering-item__price').setAttribute('data-cost', 0);
        formAmount.parentNode.parentNode.querySelector('.ordering-item__price').innerText = "0";
        formAmount.parentNode.parentNode.parentNode.classList.remove('ordering-item--active');
      });
      orderAmounts.forEach(function (orderAmount) {
        orderAmount.setAttribute('data-amount', '0');
        orderAmount.innerText = '0';
      });
    };
  });

  phoneInputs.forEach(function (phoneInput) {
    phoneInput.addEventListener('keydown', function () {
      mobileRemoveError(phoneInput);
      mobileRemoveCorrect(phoneInput);
    })
  });
  phoneTerms.addEventListener('click', function () {
    phoneTerms.classList.remove('_error');
  });
  phoneFormSucceedClose.addEventListener('click', function () {
    phoneFormSucceed.classList.remove('form-succeed--active');
    document.body.style.overflow = '';
  });
};

// add & remove
const itemsWrapper = document.querySelector('.table-inner');

if (itemsWrapper) {
  const itemsAddBtns = itemsWrapper.querySelectorAll('.amount-add');
  const itemsRmBtns = itemsWrapper.querySelectorAll('.amount-rm');
  const itemsAmounts = itemsWrapper.querySelectorAll('.item-amount');
  const itemsOrderBtn = itemsWrapper.querySelector('.table-apply');
  const itemsForm = itemsWrapper.querySelector('.ordering-form');
  const itemsFormClose = itemsWrapper.querySelector('.ordering-form__close');
  const formRmBtns = itemsWrapper.querySelectorAll('.ordering-item__rm');
  const formAddBtns = itemsWrapper.querySelectorAll('.ordering-item__add');
  const formAmounts = itemsWrapper.querySelectorAll('.ordering-item__amount');
  const totalAmount = itemsWrapper.querySelector('.ordering-form__amount');
  const totalPrice = itemsWrapper.querySelector('.ordering-form__price');
  const itemsFormOnline = itemsWrapper.querySelector('.online-order');
  const itemsFormPhone = itemsWrapper.querySelector('.phone-order');
  const phoneForm = itemsWrapper.querySelector('.phone-form');
  const phoneOrderBtn = itemsWrapper.querySelector('.phone-order');

  itemsAddBtns.forEach(function (itemsAddBtn) {
    itemsAddBtn.addEventListener('click', function () {
      let amount = Number(itemsAddBtn.previousElementSibling.getAttribute('data-amount'));
      amount++;
      itemsAddBtn.previousElementSibling.setAttribute('data-amount', amount);
      itemsAddBtn.previousElementSibling.innerText = itemsAddBtn.previousElementSibling.getAttribute('data-amount');
      let itemID = Number(itemsAddBtn.previousElementSibling.getAttribute('data-id'));
      formAmounts.forEach(function (formAmount) {
        let amountID = Number(formAmount.getAttribute('data-id'));
        if (amountID === itemID) {
          formAmount.setAttribute('data-amount', amount);
          formAmount.innerText = formAmount.getAttribute('data-amount');
          if (amount === 1) {
            formAmount.parentNode.parentNode.parentNode.classList.add('ordering-item--active');
          }
          let totalAmountValue = Number(totalAmount.getAttribute('data-amount'));
          if (totalAmountValue === 0) {
            itemsFormOnline.classList.remove('online-order--inactive');
            itemsFormPhone.classList.remove('phone-order--inactive');
          };
          totalAmountValue++;
          totalAmount.setAttribute('data-amount', totalAmountValue);
          totalAmount.innerHTML = totalAmount.getAttribute('data-amount');
          let price = Number(formAmount.getAttribute('data-price'));
          let cost = Number(formAmount.parentNode.nextElementSibling.children[0].getAttribute('data-cost'));
          let totalPriceValue = Number(totalPrice.getAttribute('data-price'));
          formAmount.parentNode.nextElementSibling.children[0].setAttribute('data-cost', cost + price);
          formAmount.parentNode.nextElementSibling.children[0].innerText = formAmount.parentNode.nextElementSibling.children[0].getAttribute('data-cost');
          totalPrice.setAttribute('data-price', totalPriceValue + price);
          totalPrice.innerText = totalPrice.getAttribute('data-price');
        }
      });
    });
  });

  itemsRmBtns.forEach(function (itemsRmBtn) {
    itemsRmBtn.addEventListener('click', function () {
      let amount = Number(itemsRmBtn.nextElementSibling.getAttribute('data-amount'));
      if (amount > 0) {
        amount--;
        itemsRmBtn.nextElementSibling.setAttribute('data-amount', amount)
        itemsRmBtn.nextElementSibling.innerText = itemsRmBtn.nextElementSibling.getAttribute('data-amount');
        let itemID = Number(itemsRmBtn.nextElementSibling.getAttribute('data-id'));
        formAmounts.forEach(function (formAmount) {
          let amountID = Number(formAmount.getAttribute('data-id'));
          if (amountID === itemID) {
            formAmount.innerText = itemsRmBtn.nextElementSibling.innerText;
            if (amount < 1) {
              formAmount.parentNode.parentNode.parentNode.classList.remove('ordering-item--active');
            }
            let totalAmountValue = Number(totalAmount.getAttribute('data-amount'));
            if (totalAmountValue < 2) {
              itemsFormOnline.classList.add('online-order--inactive');
              itemsFormPhone.classList.add('phone-order--inactive');
            };
            totalAmountValue--;
            totalAmount.setAttribute('data-amount', totalAmountValue);
            totalAmount.innerHTML = totalAmount.getAttribute('data-amount');
            let price = Number(formAmount.getAttribute('data-price'));
            let cost = Number(formAmount.parentNode.nextElementSibling.children[0].getAttribute('data-cost'));
            let totalPriceValue = Number(totalPrice.getAttribute('data-price'));
            formAmount.parentNode.nextElementSibling.children[0].setAttribute('data-cost', cost - price);
            formAmount.parentNode.nextElementSibling.children[0].innerText = formAmount.parentNode.nextElementSibling.children[0].getAttribute('data-cost');
            totalPrice.setAttribute('data-price', totalPriceValue - price);
            totalPrice.innerText = totalPrice.getAttribute('data-price');
          }
        });
      }
    });
  });


  itemsOrderBtn.addEventListener('click', function () {
    itemsForm.classList.add('ordering-form--active');
    document.body.style.overflow = 'hidden';
  });
  itemsFormClose.addEventListener('click', function () {
    itemsForm.classList.remove('ordering-form--active');
    document.body.style.overflow = '';
  });

  formRmBtns.forEach(function (formRmBtn) {
    formRmBtn.addEventListener('click', function () {
      let amount = Number(formRmBtn.nextElementSibling.getAttribute('data-amount'));
      if (amount > 0) {
        if (amount < 2) {
          formRmBtn.parentNode.parentNode.parentNode.classList.remove('ordering-item--active');
        };
        amount--;
        formRmBtn.nextElementSibling.setAttribute('data-amount', amount);
        formRmBtn.nextElementSibling.innerText = formRmBtn.nextElementSibling.getAttribute('data-amount');
        let totalAmountValue = Number(totalAmount.getAttribute('data-amount'));
        if (totalAmountValue < 2) {
          itemsFormOnline.classList.add('online-order--inactive');
          itemsFormPhone.classList.add('phone-order--inactive');
        };
        totalAmountValue--;
        totalAmount.setAttribute('data-amount', totalAmountValue);
        totalAmount.innerText = totalAmount.getAttribute('data-amount');
        let price = Number(formRmBtn.nextElementSibling.getAttribute('data-price'));
        let cost = Number(formRmBtn.parentNode.nextElementSibling.children[0].getAttribute('data-cost'));
        let totalPriceValue = Number(totalPrice.getAttribute('data-price'));
        formRmBtn.parentNode.nextElementSibling.children[0].setAttribute('data-cost', cost - price);
        formRmBtn.parentNode.nextElementSibling.children[0].innerText = formRmBtn.parentNode.nextElementSibling.children[0].getAttribute('data-cost');
        totalPrice.setAttribute('data-price', totalPriceValue - price);
        totalPrice.innerText = totalPrice.getAttribute('data-price');
        let itemID = Number(formRmBtn.nextElementSibling.getAttribute('data-id'));
        itemsAmounts.forEach(function (itemsAmount) {
          let dishID = Number(itemsAmount.getAttribute('data-id'));
          if (itemID === dishID) {
            itemsAmount.setAttribute('data-amount', formRmBtn.nextElementSibling.getAttribute('data-amount'));
            itemsAmount.innerText = formRmBtn.nextElementSibling.getAttribute('data-amount');
          }
        });
      }
    });
  });
  formAddBtns.forEach(function (formAddBtn) {
    formAddBtn.addEventListener('click', function () {
      let amount = Number(formAddBtn.previousElementSibling.getAttribute('data-amount'));
      if (amount === 0) {
        formAddBtn.parentNode.parentNode.parentNode.classList.add('ordering-item--active');
      };
      amount++;
      formAddBtn.previousElementSibling.setAttribute('data-amount', amount);
      formAddBtn.previousElementSibling.innerText = formAddBtn.previousElementSibling.getAttribute('data-amount');
      let totalAmountValue = Number(totalAmount.getAttribute('data-amount'));
      if (totalAmountValue === 0) {
        itemsFormOnline.classList.remove('online-order--inactive');
        itemsFormPhone.classList.remove('phone-order--inactive');
      };
      totalAmountValue++;
      totalAmount.setAttribute('data-amount', totalAmountValue);
      totalAmount.innerText = totalAmount.getAttribute('data-amount');
      let price = Number(formAddBtn.previousElementSibling.getAttribute('data-price'));
      let cost = Number(formAddBtn.parentNode.nextElementSibling.children[0].getAttribute('data-cost'));
      let totalPriceValue = Number(totalPrice.getAttribute('data-price'));
      formAddBtn.parentNode.nextElementSibling.children[0].setAttribute('data-cost', cost + price);
      formAddBtn.parentNode.nextElementSibling.children[0].innerText = formAddBtn.parentNode.nextElementSibling.children[0].getAttribute('data-cost')
      totalPrice.setAttribute('data-price', totalPriceValue + price);
      totalPrice.innerText = totalPrice.getAttribute('data-price');
      let itemID = Number(formAddBtn.previousElementSibling.getAttribute('data-id'));
      itemsAmounts.forEach(function (itemsAmount) {
        let dishID = Number(itemsAmount.getAttribute('data-id'));
        if (itemID === dishID) {
          itemsAmount.setAttribute('data-amount', formAddBtn.previousElementSibling.getAttribute('data-amount'));
          itemsAmount.innerText = formAddBtn.previousElementSibling.getAttribute('data-amount');
        }
      });
    });
  });
  phoneOrder(phoneOrderBtn, phoneForm);
};


//sidebar
function hidePrompt() {
  document.querySelector('.sidebar-contacts__quote').classList.add('sidebar-contacts__quote--hidden');
};
const prompt = document.querySelector('.sidebar-contacts__quote');

if (prompt) {
  setTimeout(hidePrompt, 7000);
};


//mobile menu btn
const mobileBtns = document.querySelectorAll('.header-icons__menu');
const mobileCloseBtns = document.querySelectorAll('.nav-block__mobile-close');

if (mobileBtns){
  mobileBtns.forEach(function(mobileBtn){
    mobileBtn.addEventListener('click', function(){
      mobileBtn.parentNode.nextElementSibling.classList.add('header-inner__mobile-bg--active');
      mobileBtn.parentNode.nextElementSibling.nextElementSibling.classList.add('nav-block--active');
    });
  });

  mobileCloseBtns.forEach(function(mobileClose){
    mobileClose.addEventListener('click', function(){
      mobileClose.parentNode.parentNode.classList.remove('nav-block--active');
      mobileClose.parentNode.parentNode.previousElementSibling.classList.remove('header-inner__mobile-bg--active');
    });
  });
}