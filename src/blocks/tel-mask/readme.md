**вызов** 
    
    const mask = new TelMask({
      input:input
    }) 

**принимает:**
 
- `input` - element
- `mask` - string, маска, которую нужно подставить при вводе, по умолчанию '+7 (___) ___ ____'
- `place` - bool, если true то маска подставится в placeholder
 
для input установлены евенты input, focus, blur 