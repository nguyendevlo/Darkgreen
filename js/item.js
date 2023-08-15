let btn_search = document.getElementById('btn_search');
btn_search.addEventListener('click', () => {
    const searchValue = document.getElementById('search-input').value;
    window.location.href = `index.html?searchValue=${encodeURIComponent(searchValue)}`;
})
let Logo_icon = document.getElementsByClassName('Logo-icon')[0];

Logo_icon.addEventListener('click', () => {
    window.location.href = 'index.html';
})