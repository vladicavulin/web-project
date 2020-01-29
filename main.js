var imageSF = document.querySelector('.trip-images');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

    function openModal() {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
        
        }
        
        function closeModal() {
            backdrop.style.display = 'none';
            modal.style.display = 'none';
            
            }
        
        
        imageSF.onclick=openModal;
        backdrop.onclick=closeModal;


