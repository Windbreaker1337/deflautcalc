const clearBtn = document.getElementById('clear') ; 
const input = document.getElementById('inpNum'); 
const num = document.querySelectorAll('.num');
const del = document.getElementById('del');
const multi = document.getElementById('multi');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const equal = document.getElementById('equal');
const dot = document.getElementById('dot');
const oper = [plus, minus , multi , del]; 
oper.forEach((btn) => { 
    btn.addEventListener('click' , () => { 
        const  l = input.value[input.value.length - 1];
        if( !['+' , '-' , '*' , '/'].includes(l)) { 
            input.value += btn.textContent; 
        }
    })
})

document.addEventListener('DOMContentLoaded' , () => { 

});

clearBtn.addEventListener('click' , () => { 
    input.value = ''; 
});

num.forEach((btn) => { 
    btn.addEventListener('click' , () => { 
        input.value += btn.textContent;
    })
});

dot.addEventListener('click' , () => { 
    const curV = input.value ; 
    const lOper = Math.max( 
        curV.lastIndexOf('+') , 
        curV.lastIndexOf('-') , 
        curV.lastIndexOf('*') , 
        curV.lastIndexOf('/')
    );

    const lNum  = curV.slice(lOper + 1); 
    if(!lNum.includes('.')) {
        input.value += '.'; 
    }
}); 


equal.addEventListener('click' , () => { 
    try {
        const expression = input.value.replace(/x/g, '*');
        const result = eval(expression);
        input.value = result;
    } catch (error) {
        input.value = 'Error';
    }
});
