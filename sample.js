 let displayNum = document.getElementById('displayNum');

            function btnValue(value){
                displayNum.value += value;
            }

            function resultBtn(){
                displayNum.value = eval(displayNum.value);
            }

            function clearBtn(){
                displayNum.value = '';
            }