const salary = document.getElementById('input'),
      btn = document.querySelector('.btn'),
      outputs = document.querySelector('.outputs');

function readjustSalary() {
    if(salary.value != '') {
        let percentage, readjustedSalary, increaseValue;

        if(salary.value <= 280) {
            percentage = 20 / 100;
        }
        else if(salary.value > 280 && salary.value <= 699) {
            percentage = 15 / 100;
        }
        else if(salary.value >= 700 && salary.value <= 1499) {
            percentage = 10 / 100;
        }
        else {
            percentage = 5 / 100;
        }

        readjustedSalary = parseFloat(salary.value) + parseFloat(salary.value) * parseFloat(percentage);
        increaseValue = parseFloat(readjustedSalary) - parseFloat(salary.value);

        switch(percentage) {
            case 0.2:
                percentage = '20%';
                break;
            case 0.15:
                percentage = '15%';
                break;
            case 0.10:
                percentage = '10%';
                break;
            case 0.05:
                percentage = '5%';
                break;
        }

        return outputs.innerHTML = createOutputs(percentage, readjustedSalary, salary.value, increaseValue);
    }
    else {
        return outputs.innerHTML = 'Você precisa informar um valor !';
    }
    
}

function createOutputs(percentage, readjustedSalary, salary, increaseValue) {
    let output = `<p>Salário antes do reajuste: R$${salary}</p>
                  <p>Percentual de aumento aplicado: ${percentage}</p>
                  <p>Valor do aumento: R$${increaseValue.toFixed(2).replace('.', ',')}</p>
                  <p>Novo salário: R$${readjustedSalary.toFixed(2).replace('.', ',')}</p>`;
    
    return output;
}

btn.addEventListener('click', readjustSalary);