document.querySelector('#picture').addEventListener('change', Event =>{
    if (Event.target.files && Event.target.files[0]) {
       if (/image\/*/.test(Event.target.files[0].type)) {
        const reader = new FileReader();

        reader.onload = function() {
            document.querySelector('.pin_image img').src = reader.result;
        }



        reader.readAsDataURL(Event.target.files[0]);
       } 
    }

    document.querySelector('#picture').value = '';
});