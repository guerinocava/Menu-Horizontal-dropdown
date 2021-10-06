/* global  , ncpf, res1, windows, rcpf, res, rCpf, res2, res3, $somaB    */

    //res.innerHTML = 'chegou a1';
function valida(){
    
    rcpf = document.getElementById('cpf');
    //i = 0, x = 0;
    digitoA = 0;
    digitoB = 0;
    res.innerHTML = rcpf.value; 
    
    for (i = 0, x = 10; i <= 8; i++, x--){
        digitoA += rcpf[i] * x;
    }
    for (i = 0, x = 11; i <= 9; i++, x--){
        digitoB += rcpf[i] * x;
    }
    somaA = ((digitoA%11) < 2 ) ? 0 : 11-(digitoA%11);
    somaB = ((digitoB%11) < 2 ) ? 0 : 11-(digitoB%11);
        
    if (somaA != rcpf[9] || somaB != rcpf[10]){
        res3.innerHTML = 'CPF Invalido';
        return false;
    }else{
        res3.innerHTML = 'CPF Valido';
       return true;
    }
 } 
    
    /*
    
 
            res.innerHTML = "chegou a1";
            //nrCpf.focus();
            cpf = nrCpf.value;
            //$cpf = preg_replace('/[^0-9]/', '', $cpf);
            digitoA = 0;
            digitoB = 0;
            //res.innerHTML = "chegou a1";
            for (i = 0, x = 10; i <= 8; i++, x--){
                digitoA += cpf[i] * x;  
            }
            for (i = 0, x = 11; i <= 9; i++, x--){
                digitoB += cpf[i] * x;
            }

            somaA = ((digitoA%11) < 2 ) ? 0 : 11-(digitoA%11);
            somaB = ((digitoB%11) < 2 ) ? 0 : 11-(digitoB%11);

            if (cpf == '00000000000' || 
                        cpf == '11111111111' || 
                        cpf == '22222222222' || 
                        cpf == '33333333333' || 
                        cpf == '44444444444' || 
                        cpf == '55555555555' || 
                        cpf == '66666666666' || 
                        cpf == '77777777777' || 
                        cpf == '88888888888' || 
                        cpf == '99999999999' ||
                        cpf == '12345678910') {
                        res.innerHTML = 'Digite um CPF Valido !';
                        return false;
                    }

            if(somaA != cpf[9] ||  somaB != cpf[10]){
                res1.innerHTML = 'CPF Invalido';
                return false;
            }else{
                res1.innerHTML = 'CPF Valido';
               return true;
            }
            
            
        }
    }
    
}*/
 
 



