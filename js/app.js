


  window.onload = function() {
            var thumbPhoto = document.querySelector('.thumbPhoto');
            var bigPhoto=document.querySelector('.bigPhoto');
            thumbPhoto.addEventListener('mouseover',function(){
                bigPhoto.classList.add('active');
            })
            thumbPhoto.addEventListener('mouseout',function(){
                bigPhoto.classList.remove('active');
            })
        };
