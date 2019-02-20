function changeVocals (str) {
    //code di sini
    var vokal = 'aiueoAIUEO'
    var alphabet ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    str = str.split('')

    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < vokal.length; j++){
            if (vokal[j] === str[i]){
                for (let k = 0; k < alphabet.length; k++){
                    if (str[i] === alphabet[k]){
                        str[i] = alphabet[k+1]
                        break
                    }
                }
            }
        }
    }
    // console.log(str)
  return str.join('')
  }

  function reverseWord (str) {
    //code di sini
    var output = ''
    for (let i = str.length-1; i >= 0; i--){
        output += str[i]
    }
    return output
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var output = ''
    for (let i = 0; i < str.length;i++){
        if (str[i] === str[i].toUpperCase()){
            output += str[i].toLowerCase()
        }else output +=str[i].toUpperCase()
    }
    return output
  }


  
  function removeSpaces (str) {
    //code di sini
    var output = ''
    for (let i = 0; i < str.length; i++){
        if (str[i] !== ' '){
            output += str[i]
        }
    }
    return output
  }

  
  function passwordGenerator (name) {
    //code di sini
    var vokal = changeVocals(name)
    var reverse = reverseWord(vokal)
    var lowerUpper = setLowerUpperCase(reverse)
    var removed = removeSpaces(lowerUpper)
    if (removed.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    return removed
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'